import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from './state';
import { CounterEvents, CounterFeatureEvents } from './state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current$ = this.store.select(selectCounterCurrent);
  constructor(private store: Store) {
    store.dispatch(CounterFeatureEvents.entered());
  }

  increment() {
    this.store.dispatch(CounterEvents.incremented());
  }

  decrement() {
    this.store.dispatch(CounterEvents.decremented());
  }
}
