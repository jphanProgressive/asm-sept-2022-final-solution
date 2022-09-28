import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCount from './reducers/counter.reducer';

export const FEATURENAME = 'Counter';

// TypeScript needs this.
export interface CounterState {
  count: fromCount.CountState;
}

export const reducers: ActionReducerMap<CounterState> = {
  count: fromCount.reducer,
};

// 1. Create a "Feature Selector"
const selectFeature = createFeatureSelector<CounterState>(FEATURENAME);
// 2. A Selector per branch (or property) of the feature state
const selectCountBranch = createSelector(selectFeature, (f) => f.count);
// 3. Helpers or Utilities (optional)

// 4. A selector that returns the "model" your component needs.

// TODO: Create a selector that return the current value of the count.

export const selectCounterCurrent = createSelector(
  selectCountBranch,
  (b) => b.current
);

export const selectCountingBy = createSelector(selectCountBranch, (b) => b.by);
