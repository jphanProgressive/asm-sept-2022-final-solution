import { createReducer, on } from '@ngrx/store';

import { SortOptions } from '../actions/list-sort.actions';
import { ListSorterEvents } from '../actions/list-sort.actions';
export interface ListSortState {
  sortBy: SortOptions;
}

const initialState: ListSortState = {
  sortBy: 'title',
};

export const reducers = createReducer(
  initialState,
  on(ListSorterEvents.sorted, (s, a) => ({ ...s, sortBy: a.payload }))
);
