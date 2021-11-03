import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import { Text, View } from '../../components/Themed'
import { RootStackScreenProps } from '../../types'
import styles from './styles'

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta tela não existe.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Vá para a tela inicial!</Text>
      </TouchableOpacity>
    </View>
  )
}
