import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { SongDocuments } from '../actions/songs.actions';
export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongsState extends EntityState<SongEntity> {}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(SongDocuments.song, (s, a) => adapter.addOne(a.payload, s)),
  on(SongDocuments.songs, (s, a) => adapter.setMany(a.payload, s))
);
