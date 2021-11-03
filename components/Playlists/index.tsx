import * as React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { View } from '../../components/Themed'
import { GridPlaylist } from '../../components/Grid'
import Tag from '../../components/Tag'
import styles from './styles'
import { PlaylistType, PlaylistsProps } from './types'

export default function Playlists({ goTracks, playlists }: PlaylistsProps) {
  return (
    <View>
      {!playlists.length && (
        <Tag value="Nenhuma playlist encontrada" />
      )}
      <GridPlaylist
        data={playlists}
        renderItem={(playlist: PlaylistType) => (
          <TouchableOpacity onPress={() => goTracks({ playlist: playlist.id })}>
            <Image
              source={{ uri: playlist.images[0].url }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
