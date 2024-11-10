import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/headerwhite';
import BottomNavBar from '../components/bottom';

export default function QR({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Scan To Pay" onBackPress={() => alert('Back clicked')} onHelpPress={() => alert('Help/Settings clicked')} />

      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/scan.png')} style={styles.image} />
      </View>

      <View style={styles.textContent}>
        <Text style={styles.title}>Payment with QR Code</Text>
        <Text style={styles.description}>Hold the code inside the frame, it will be scanned automatically</Text>
      </View>
      <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#0D0B1E',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  textContent: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 100,
    marginVertical: 10,
  },
});