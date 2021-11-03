import * as React from 'react'
import { Audio } from 'expo-av'
import { useToast } from 'react-native-styled-toast'

import { TrackType } from '../components/Tracks/types'

export default function useAudio() {
  const { toast } = useToast()
  const [id, setId] = React.useState('')
  const [sound, setSound] = React.useState<Audio.Sound>()
  const [isLoading, setLoading] = React.useState(false)
  const [isPlay, setPlay] = React.useState(false)

  async function playSound(item: TrackType) {
    const prevId = id
    const prevSound = sound
    setId(item.track.id)
    setLoading(true)

    try {
      const payload = {uri: item.track.preview_url}
      const { sound } = await Audio.Sound.createAsync(payload)
      setSound(sound)
      await sound.playAsync()
      setPlay(true)
      setTimeout(() => {
        setPlay(false)
      }, 30000)
    } catch (error) {
      toast({ message: 'Erro ao tentar reproduzir', intent: 'ERROR' })
      setId(prevId)
      setSound(prevSound)
    }

    setLoading(false)
  }

  const togglePlay = React.useCallback(async (item: TrackType) => {
    if (id && item.track.id === id && sound && isPlay) {
      setPlay(false)
      return await sound.stopAsync()
    }

    playSound(item)
  }, [sound, isPlay])

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return {
    id,
    isLoading,
    isPlay,
    togglePlay
  }
}
