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
});
