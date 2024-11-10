import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Mybutton from '../components/button';


export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.txtcontainer}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.sikka}>Sikka</Text>
        <Text style={styles.tagline}>Your Wealth Your Sikka</Text>
      </View>
      <View ><Image source={require('../assets/splash.png')} style={styles.img} /></View>
      <View style={styles.buttonContainer}>
        <Mybutton style={styles.button} title="Go to Details"
        onPress={() => navigation.navigate('SetGoals')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,

  },
  txtcontainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
    top: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sikka: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color:'#00CCAA'
  },
  tagline: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    maxWidth:'60%'
  },
  buttonContainer: {
    bottom: 0,
    marginLeft: 110,
    marginBottom: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,

  },
  button: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 10,
  },
  img: {
    resizeMode: 'contain',
  },
});