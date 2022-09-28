import { createActionGroup, emptyProps } from '@ngrx/store';

export const ErrorEvents = createActionGroup({
  source: 'Errors Events',
  events: {
    clear: emptyProps(),
  },
});
