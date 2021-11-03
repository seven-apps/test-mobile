import * as React from 'react'
import { useToast } from 'react-native-styled-toast'
import { FontAwesome } from '@expo/vector-icons'
import {
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'

import api from '../../config/api'
import { TrackDataType } from '../../components/Tracks/types'
import { Text, View } from '../../components/Themed'
import Loading from '../../components/Loading'
import Playlists from '../../components/Playlists'
import Tracks from '../../components/Tracks'
import { RootTabScreenProps } from '../../types'
import styles from './styles'

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  const [isLoading, setLoading] = React.useState(false)
  const [tracks, setTracks] = React.useState([])
  const [playlists, setPlaylists] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [type, setType] = React.useState('playlist')
  const { toast } = useToast()

  const fetchData = async () => {
    if (!search) {
      toast({ message: 'Preencha o campo de busca', intent: 'ERROR' })
      return null
    }
    setLoading(true)
    try {
      const result = await api.get(`search?type=playlist,track&include_external=audio&q=${search}`)
      setPlaylists(result.data.playlists.items)
      setTracks(result.data.tracks.items.map((item: TrackDataType) => ({ track: item })))
    } catch (error) {
      toast({ message: 'Erro ao buscar playlists', intent: 'ERROR' })
    }
    setLoading(false)
  }

  const renderList = () => {
    if (type === 'track') {
      return <Tracks data={tracks} />
    }

    return (
      <Playlists
        goTracks={(params) => navigation.navigate('Playlist', params)}
        playlists={playlists}
      />
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} onChangeText={setSearch} />
        <TouchableOpacity style={styles.button} onPress={fetchData}>
          <FontAwesome
            name="search"
            size={25}
            color="white"
            style={{ marginHorizontal: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.filter}>
        <TouchableOpacity
          style={type === 'playlist' ? styles.radioActive : styles.radio}
          onPress={() => setType('playlist')}>
          <Text style={styles.radioLabel}>Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={type === 'track' ? styles.radioActive : styles.radio}
          onPress={() => setType('track')}>
          <Text style={styles.radioLabel}>Músicas</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : renderList()}
    </ScrollView>
  )
}
