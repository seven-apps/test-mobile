import * as React from 'react'

import { Text } from '../../components/Themed'
import { TagProps } from './types'
import styles from './styles'

export default function Tag({ value }: TagProps) {
  return (
    <Text style={styles.tag}>{value}</Text>
  )
}