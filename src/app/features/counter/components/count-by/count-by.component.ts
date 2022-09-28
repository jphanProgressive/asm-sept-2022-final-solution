import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountingBy } from '../../state';
import { CountByEvents, CountByOptions } from '../../state/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css'],
})
export class CountByComponent {
  by$ = this.store.select(selectCountingBy);
  constructor(private store: Store) {}

  setCountBy(by: CountByOptions) {
    this.store.dispatch(CountByEvents.set({ payload: { by } }));
  }
}
