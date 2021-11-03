import * as React from 'react'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useToast } from 'react-native-styled-toast'

import { RootTabScreenProps } from '../../types'
import Loading from '../../components/Loading'
import Playlists from '../../components/Playlists'
import api from '../../config/api'
import { RouterParams } from './types'
import styles from './styles'

export default function CategoryScreen({ navigation }: RootTabScreenProps<'Category'>) {
  const [isLoading, setLoading] = React.useState(false)
  const [playlists, setPlaylists] = React.useState([])
  const route = useRoute<RouterParams>()
  const { toast } = useToast()

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    try {
      const endpoint = `browse/categories/${route.params.category}/playlists`
      const result = await api.get(endpoint)
      setPlaylists(result.data.playlists.items)
    } catch (error) {
      toast({ message: 'Erro ao buscar playlists', intent: 'ERROR' })
    }
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScrollView style={styles.container}>
      <Playlists
        goTracks={(params) => navigation.navigate('Playlist', params)}
        playlists={playlists}
      />
    </ScrollView>
  )
}
