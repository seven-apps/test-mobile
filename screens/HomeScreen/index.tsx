import * as React from 'react'
import { useToast } from 'react-native-styled-toast'
import {
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

import { RootTabScreenProps } from '../../types'
import { Text, View } from '../../components/Themed'
import { GridCategory } from '../../components/Grid'
import Loading from '../../components/Loading'
import Tag from '../../components/Tag'
import api from '../../config/api'
import styles from './styles'
import { CategoryType } from './types'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [isLoading, setLoading] = React.useState(false)
  const [categories, setCategories] = React.useState([])
  const { toast } = useToast()

  const fetchData = React.useCallback(async () => {
    setLoading(true)
    try {
      const result = await api.get('browse/categories')
      setCategories(result.data.categories.items)
    } catch (error) {
      toast({ message: 'Erro ao buscar categorias', intent: 'ERROR' })
    }
    setLoading(false)
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const goCategory = (id: string) => {
    navigation.navigate('Category', { category: id })
  }

  if (isLoading) {
    return <Loading />
  }

  if (!categories.length) {
    return <Tag value="Nenhuma categoria encontrada" />
  }

  return (
    <ScrollView style={styles.container}>
      <GridCategory
        data={categories}
        renderItem={(category: CategoryType) => (
          <TouchableOpacity onPress={() => goCategory(category.id)}>
            <View style={styles.item}>
              <Image
                source={{ uri: category.icons[0].url }}
                style={styles.image}
              />
              <Text style={styles.title}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  )
}
