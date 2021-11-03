import * as React from 'react'

import { View } from '../../components/Themed'
import { PlaylistType } from '../../components/Playlists/types'
import { CategoryType } from '../../screens/HomeScreen/types'
import { GridPlaylistProps, GridCategoryProps } from './types'
import styles from './styles'

export function GridPlaylist({ data, renderItem }: GridPlaylistProps) {
  return (
    <View style={styles.grid}>
      {data.map((item: PlaylistType, index: number) => (
        <View style={styles.gridItem} key={index}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  )
}

export function GridCategory({ data, renderItem }: GridCategoryProps) {
  return (
    <View style={styles.grid}>
      {data.map((item: CategoryType, index: number) => (
        <View style={styles.gridItem} key={index}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  )
}
