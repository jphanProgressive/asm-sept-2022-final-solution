import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterEvents = createActionGroup({
  source: 'Counter Events',
  events: {
    incremented: emptyProps(),
    decremented: emptyProps(),
    reset: emptyProps(),
  },
});

export const CountByEvents = createActionGroup({
  source: 'Counter Count By',
  events: {
    set: props<{ payload: CountByPayload }>(),
  },
});

export const CounterFeatureEvents = createActionGroup({
  source: 'Counter Feature Events',
  events: {
    entered: emptyProps(),
  },
});

export type CountByOptions = 1 | 3 | 5;

type CountByPayload = {
  by: CountByOptions;
};
