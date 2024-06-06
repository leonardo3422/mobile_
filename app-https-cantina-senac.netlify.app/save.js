import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FotoPerfil from './img/fotoperfil.jpg'


export default function App() {

  return(
    <View style={styles.container}>
      <Image style={styles.Foto} source={FotoPerfil}/>
      <Text Style={styles.negrito}>Nome: Leonardo</Text>
      <Text>Ocupação: Analise de Dados</Text>
      <Text>Experiencia: Nenhuma</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
negrito:{
  fontWeight:'semibold',
},
Foto:{
  width:100,
  height:100,
  borderRadius:100,
}
}
);