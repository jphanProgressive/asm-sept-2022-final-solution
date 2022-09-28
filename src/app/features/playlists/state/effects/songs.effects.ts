import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SongDocuments, SongEvents } from '../actions/songs.actions';
import { PlaylistFeatureEvents } from '../actions/feature.actions';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { SongEntity } from '../reducers/songs.reducer';
import { environment } from 'src/environments/environment';
@Injectable()
export class SongEffects {
  readonly url = environment.apiUrl; // TODO: Fix this!

  // SongEvents.added -> (send to api) -> SongDocuments.song
  // ConcatMap means track each request, and process them as they return.
  // Concatmap is good for unsafe (POST, PUT, DELETE, etc.) requests
  addSong$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SongEvents.added),
        concatMap((a) =>
          this.client.post<SongEntity>(this.url, a.payload).pipe(
            map((payload) => SongDocuments.song({ payload })),
            catchError((err) => {
              console.log(err);
              return of(
                SongEvents.failed({
                  payload: {
                    song: a.payload,
                    message: err.message,
                  },
                })
              );
            })
          )
        )
      );
    },
    { dispatch: true }
  );

  // PlaylistsFeatureEvents.entered -> (call API) -> SongsDocuments.songs
  // SwitchMap means that if a second request happens before this request returns, just ignore (throw away) the first request.
  // I use switchMap for safe (GET) requests.
  loadSongs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistFeatureEvents.entered),
      switchMap(() =>
        this.client.get<{ data: SongEntity[] }>(this.url).pipe(
          map((r) => r.data),
          map((payload) => SongDocuments.songs({ payload }))
        )
      )
    );
  });

  constructor(private actions$: Actions, private client: HttpClient) {}
}
