import { createActionGroup, props } from '@ngrx/store';

export const ListSorterEvents = createActionGroup({
  source: 'List Sorter Events',
  events: {
    sorted: props<{ payload: SortOptions }>(),
  },
});

export type SortOptions = 'title' | 'artist' | 'album';
