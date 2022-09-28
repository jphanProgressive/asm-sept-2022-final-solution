import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorMessage, selectHasErrors } from '../../state';
import { ErrorEvents } from '../../state/actions/errors.actions';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css'],
})
export class ErrorDisplayComponent {
  hasErrors$ = this.store.select(selectHasErrors);
  errorMessage$ = this.store.select(selectErrorMessage);
  constructor(private store: Store) {}

  clear() {
    this.store.dispatch(ErrorEvents.clear());
  }
}
