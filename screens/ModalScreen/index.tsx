import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Platform, ScrollView } from 'react-native'

import { Text, View } from '../../components/Themed'
import styles from './styles'

export default function ModalScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Desafio:</Text>
          <Text style={styles.text}>​O desafio era criar uma tela de listagem de musicas e playlists com informações como foto do artista, nome, nome da musica, e duração da musica, e criar uma tela para adicionar filtros na pesquisa. O estilo da pagina e dos componentes ficou ao meu critério.​</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Requisitos principais:</Text>
          <Text style={styles.listItem}>◦ Exibir lista de playlists com algumas informações(ficou a meu criterio quais informações mostrar) e uma opção para ver quais musicas tem nessa playlist.</Text>
          <Text style={styles.listItem}>◦ Pesquisa da lista, fazer uma tela ou um modal para escolher os filtros para a pesquisa.​</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Requisitos opcionais:</Text>
          <Text style={styles.listItem}>◦ Player de som</Text>
          <Text style={styles.listItem}>◦ Previa da musica na listagem​</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Pontos analisados:</Text>
          <Text style={styles.listItem}>◦ Typescript(se possível)</Text>
          <Text style={styles.listItem}>◦ Organização do código</Text>
          <Text style={styles.listItem}>◦ Separação dos componentes</Text>
          <Text style={styles.listItem}>◦ Performance</Text>
          <Text style={styles.listItem}>◦ Estilo dos componentes</Text>
          <Text style={styles.listItem}>◦ Testes unitários(se possível)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Libraries usadas​​</Text>
          <Text style={styles.text}>Api para busca das musicas https://developer.spotify.com/documentation/web-api/quick-start/</Text>
        </View>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </ScrollView>
  )
}
