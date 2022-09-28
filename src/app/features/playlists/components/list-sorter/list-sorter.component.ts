import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSortingBy } from '../../state';
import {
  ListSorterEvents,
  SortOptions,
} from '../../state/actions/list-sort.actions';

@Component({
  selector: 'app-list-sorter',
  templateUrl: './list-sorter.component.html',
  styleUrls: ['./list-sorter.component.css'],
})
export class ListSorterComponent {
  by$ = this.store.select(selectSortingBy);
  constructor(private store: Store) {}

  sortBy(payload: SortOptions) {
    this.store.dispatch(ListSorterEvents.sorted({ payload }));
  }
}
