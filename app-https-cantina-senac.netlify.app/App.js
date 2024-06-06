import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FotoPerfil from './img/fotoperfil.jpg'


export default function App() {

  return(
    <View style={styles.container}>
      <Image style={styles.foto} source={FotoPerfil}/>
      <Text style={styles.negrito}>Nome: Leonardo</Text>
      <Text>Ocupação: Analise de Dados</Text>
      <Text>Experiencia: Nenhuma</Text>

      <StatusBar Style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});