export type TrackDataAlbumImageType = {
  url: string
}

export type TrackDataAlbumType = {
  images: TrackDataAlbumImageType[]
}

export type TrackDataArtistType = {
  name: string
}

export type TrackDataType = {
  id: string
  name: string
  duration_ms: number
  preview_url: string
  album: TrackDataAlbumType
  artists: TrackDataArtistType[]
}

export type TrackType = {
  track: TrackDataType
}

export type TracksProps = {
  data: TrackType[]
}

export type ItemPlayerProps = {
  item: TrackType
  current: boolean
  isLoading: boolean
  isPlay: boolean
  togglePlay: (value: TrackType) => void
}