import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongEntryComponent } from './components/song-entry/song-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FEATURENAME, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SongEffects } from './state/effects/songs.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { ListSorterComponent } from './components/list-sorter/list-sorter.component';
const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'songs',
        component: SongListComponent,
      },
      {
        path: 'new',
        component: SongEntryComponent,
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
];

@NgModule({
  declarations: [
    PlaylistsComponent,
    OverviewComponent,
    SongListComponent,
    SongEntryComponent,
    ErrorDisplayComponent,
    ListSorterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURENAME, reducers),
    EffectsModule.forFeature([SongEffects]),
  ],
})
export class PlaylistsModule {}
