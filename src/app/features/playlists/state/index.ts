import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { PlaylistItemModel } from '../models';

export const FEATURENAME = 'Playlists';

import * as fromSongs from './reducers/songs.reducer';
import * as fromErrors from './reducers/errors.reducer';
import * as fromListSort from './reducers/list-sort.reducer';

export interface PlaylistsState {
  songs: fromSongs.SongsState;
  errors: fromErrors.ErrorState;
  sort: fromListSort.ListSortState;
}

export const reducers: ActionReducerMap<PlaylistsState> = {
  songs: fromSongs.reducer,
  errors: fromErrors.reducer,
  sort: fromListSort.reducers,
};

// 1. Create a Feature Selector
const selectFeature = createFeatureSelector<PlaylistsState>(FEATURENAME);
// 2. Selector per "branch" (songs)

const selectSongsBranch = createSelector(selectFeature, (f) => f.songs);
const selectErrorBranch = createSelector(selectFeature, (f) => f.errors);
const selectSortBranch = createSelector(selectFeature, (f) => f.sort);
// 3. Helpers (optional)

const { selectAll: selectSongEntityArray } =
  fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. What the component needs

// TODO: Our component needs an PlaylistItemModel[] to display the list.

export const selectSortingBy = createSelector(
  selectSortBranch,
  (b) => b.sortBy
);

export const selectSongListModel = createSelector(
  selectSongEntityArray,
  selectSortingBy,
  (songs, by) => {
    return [
      ...songs.sort((lhs, rhs) => {
        const lhsProp = lhs[by]!.toUpperCase();
        const rhsProp = rhs[by]!.toUpperCase();
        if (lhsProp < rhsProp) {
          return -1;
        }
        if (lhsProp > rhsProp) {
          return 1;
        }
        return 0;
      }),
    ];
  }
);

export const selectHasErrors = createSelector(
  selectErrorBranch,
  (b) => b.hasErrors
);

export const selectErrorMessage = createSelector(
  selectErrorBranch,
  (b) => b.errorMessage
);
