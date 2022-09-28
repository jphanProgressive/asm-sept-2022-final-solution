import { createActionGroup, emptyProps } from '@ngrx/store';

export const PlaylistFeatureEvents = createActionGroup({
  source: 'Playlist Feature Events',
  events: {
    entered: emptyProps(),
  },
});
