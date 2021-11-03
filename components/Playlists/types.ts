export type GoPlaylistParams = {
  playlist: string
}

export type PlaylistImage = {
  url: string,
}

export type PlaylistType = {
  id: string,
  images: PlaylistImage[]
}

export type PlaylistsProps = {
  playlists: PlaylistType[]
  goTracks: (params: GoPlaylistParams) => void
}
