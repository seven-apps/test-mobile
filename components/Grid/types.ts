import { PlaylistType } from '../../components/Playlists/types'
import { CategoryType } from '../../screens/HomeScreen/types'

export type GridPlaylistProps = {
  data: PlaylistType[]
  renderItem: (item: PlaylistType) => React.ReactChild
}

export type GridCategoryProps = {
  data: CategoryType[]
  renderItem: (item: CategoryType) => React.ReactChild
}