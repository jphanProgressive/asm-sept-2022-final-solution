import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { PlaylistCreateModel } from '../../models';
import { SongEvents } from '../../state/actions/songs.actions';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.css'],
})
export class SongEntryComponent {
  form = new FormGroup({
    title: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
    }),
    artist: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    album: new FormControl<string>(''),
  });
  constructor(private store: Store) {}

  addThisSong(foci: HTMLInputElement) {
    console.log(this.form.value);
    if (this.form.valid) {
      const payload: PlaylistCreateModel = {
        title: this.form.controls.title.value!,
        artist: this.form.controls.artist.value!,
        album: this.form.controls.album.value!,
      };
      this.store.dispatch(SongEvents.added({ payload }));

      this.form.reset();
      foci.focus();
    }
  }
}
