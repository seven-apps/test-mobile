import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity, Image } from 'react-native'

import { Text, View } from '../../components/Themed'
import Tag from '../../components/Tag'
import useAudio from '../../hooks/useAudio'
import styles from './styles'
import {
  TrackType,
  TracksProps,
  ItemPlayerProps
} from './types'

function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds
}

function ItemPlayer({ item, current, isLoading, isPlay, togglePlay }: ItemPlayerProps) {
  const [loading, setLoading] = React.useState(false)
  const [played , setPlayed]= React.useState(false)

  React.useEffect(() => {
    setLoading(current ? isLoading : false)
    setPlayed(current ? isPlay : false)
  }, [current, isPlay, isLoading])

  const iconName = played ? 'stop-circle' : 'play-circle'

  return (
    <TouchableOpacity onPress={() => togglePlay(item)}>
      <View style={styles.item}>
        <Image
          source={{ uri: item.track.album.images[0].url }}
          style={styles.image}
        />
        <View style={styles.icon}>
          <FontAwesome
            name={loading ? 'download' : iconName}
            size={25}
            color="#eee"
          />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {item.track.name}
          </Text>
          <View style={styles.innerInfo}>
            <Text numberOfLines={1} style={styles.artist}>
              {item.track.artists[0].name}
            </Text>
            <Text style={styles.divider}>-</Text>
            <Text numberOfLines={1} style={styles.duration}>
              {millisToMinutesAndSeconds(item.track.duration_ms)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function Tracks({ data }: TracksProps) {
  const { id, isLoading, isPlay, togglePlay } = useAudio()

  if (!data.length) {
    return <Tag value="Nenhuma track encontrada" />
  }

  return (
    <View style={styles.container}>
      {data.map((item: TrackType, index: number) => (
        <ItemPlayer
          key={index}
          item={item}
          isLoading={isLoading}
          isPlay={isPlay}
          togglePlay={togglePlay}
          current={id === item.track.id}
        />
      ))}
    </View>
  )
}
