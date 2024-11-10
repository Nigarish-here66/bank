import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Mybutton from '../components/button';

export default function SetGoal({ navigation }) {
  return (
    <View style={styles.container}>
      {/* "Create account" link */}
      <TouchableOpacity style={styles.createAccount}
        onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/running.png')} style={styles.image} />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>SET YOUR</Text>
        <Text style={styles.headerText}>FINANCIAL GOAL</Text>
        <Text style={styles.descriptionText}>You can track your progress and achievements in a special section</Text>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Mybutton title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0B1E',
  },
  createAccount: {
    top: 50,
    alignItems: 'flex-end',
  },
  createAccountText: {
    color: '#FF5063',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginRight: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  descriptionText: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 300,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
});