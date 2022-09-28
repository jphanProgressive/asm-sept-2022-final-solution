import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSongListModel } from '../../state';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
})
export class SongListComponent {
  songs$ = this.store.select(selectSongListModel);
  constructor(private store: Store) {}
}
