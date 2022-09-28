import { createActionGroup, props } from '@ngrx/store';
import { PlaylistCreateModel } from '../../models';
import { SongEntity } from '../reducers/songs.reducer';

// Events are the things that components dispatch
// and they just indicate "that happened"
// past tense thing that happened.
export const SongEvents = createActionGroup({
  source: 'Song Events',
  events: {
    added: props<{ payload: PlaylistCreateModel }>(),
    failed: props<{
      payload: { song: PlaylistCreateModel; message: string };
    }>(),
  },
});

// The things the reducer needs.
// the "nouns"
export const SongDocuments = createActionGroup({
  source: 'Song Documents',
  events: {
    song: props<{ payload: SongEntity }>(),
    songs: props<{ payload: SongEntity[] }>(),
  },
});
