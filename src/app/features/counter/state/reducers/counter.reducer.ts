import { createReducer, on } from '@ngrx/store';
import {
  CountByEvents,
  CountByOptions,
  CounterEvents,
} from '../counter.actions';
export interface CountState {
  current: number;
  by: CountByOptions;
}

const initialState: CountState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(CountByEvents.set, (s, a) => ({ ...s, by: a.payload.by })),
  on(CounterEvents.incremented, incrementState),
  on(CounterEvents.decremented, (s) => ({
    ...s,
    current: s.current - s.by,
  })),
  on(CounterEvents.reset, (s) => ({ ...s, current: initialState.current }))
);

// Named function
function incrementState(state: CountState): CountState {
  return {
    ...state,
    current: state.current + state.by,
  } as CountState;
}
