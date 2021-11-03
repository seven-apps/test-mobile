import * as React from 'react'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useToast } from 'react-native-styled-toast'

import Loading from '../../components/Loading'
import Tracks from '../../components/Tracks'
import api from '../../config/api'

import { RouterParams } from './types'
import styles from './styles'

export default function PlaylistScreen() {
  const [isDataLoading, setLoading] = React.useState(false)
  const [tracks, setTracks] = React.useState([])
  const route = useRoute<RouterParams>()
  const { toast } = useToast()

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    try {
      const result = await api.get(`playlists/${route.params.playlist}`)
      setTracks(result.data.tracks.items)
    } catch (error) {
      toast({ message: 'Erro ao buscar tracks', intent: 'ERROR' })
    }
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isDataLoading) {
    return <Loading />
  }

  return (
    <ScrollView style={styles.container}>
      <Tracks data={tracks} />
    </ScrollView>
  )
}
