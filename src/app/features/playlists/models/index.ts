export interface PlaylistItemModel {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface PlaylistCreateModel {
  title: string;
  artist: string;
  album?: string;
}
