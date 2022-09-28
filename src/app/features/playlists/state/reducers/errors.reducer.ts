import { createReducer, on } from '@ngrx/store';

import { ErrorEvents } from '../actions/errors.actions';
import { SongEvents } from '../actions/songs.actions';
export interface ErrorState {
  hasErrors: boolean;
  errorMessage?: string;
}

const initialState: ErrorState = {
  hasErrors: false,
};

export const reducer = createReducer(
  initialState,
  on(ErrorEvents.clear, () => initialState),
  on(SongEvents.failed, (s, a) => ({
    hasErrors: true,
    errorMessage: `Error Adding Song ${a.payload.song.title} Sorry About That`,
  }))
);
