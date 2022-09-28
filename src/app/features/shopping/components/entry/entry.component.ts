import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Output() itemAdded = new EventEmitter<{ description: string }>();

  form = new FormGroup({
    description: new FormControl<string>(''),
  });
  constructor() {}

  addItem() {
    const message = {
      description: this.form.controls.description.value!,
    };
    this.itemAdded.emit(message);
  }
}
