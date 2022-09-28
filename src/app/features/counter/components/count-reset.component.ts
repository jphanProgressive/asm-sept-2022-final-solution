import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from '../state';
import { CounterEvents } from '../state/counter.actions';

@Component({
  selector: 'app-counter-reset',
  template: `<button
    [disabled]="(count$ | async) === 0"
    (click)="reset()"
    class="btn btn-success"
  >
    Reset
  </button>`,
})
export class CountResetComponent {
  count$ = this.store.select(selectCounterCurrent);
  constructor(private store: Store) {}

  reset() {
    this.store.dispatch(CounterEvents.reset());
  }
}
