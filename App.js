import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.head}>
        <View style={styles.imageBox}>
          <Image source={require('./assets/imagenCurriculum.png')} style={styles.imagen}/>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.headText}>
            Gabriel Alejandro Depool Martínez
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Mi nombre es Gabriel Alejandro Depool Martínez, en la actualidad soy estudiante en un ciclo formativo de grado superior en Salesianos La Cuesta.
          Disfruto mucho de mi tiempo libre ya que me permite estar despejado, hago deporte y soy una persona extrovertida.</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: 'grey',
    paddingLeft: 30,
  },
  
  imageBox: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-evenly',
    marginLeft: 50
  },
  
  imagen: {
    width: 75, 
    height: 75, 
    borderRadius: 100,
    textAlign: 'center',
    paddingLeft: 30,
  },
  
  textBox: {
    flexDirection: 'row',
    width: '90%'
  },
  
  headText: {
    fontSize: 30,
    color: 'white',
    alignItems: 'flex-end ', 
    paddingRight: 12,
    paddingLeft: 10
  },

  content: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  contentText: {
    margin: 20,
  },
});
