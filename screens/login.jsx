import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Field from '../components/inputfield';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Mybutton from '../components/button';

export default function Login() {
  return (
    // container
    <View style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        <Text style={styles.login}>Login</Text>
        <TouchableOpacity onPress={() => console.log('Create Account pressed')}>
          <Text style={styles.Account}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* input fields */}
      <View >
        <Field placeholder="jone@deper.one" icon="envelope" />
        
      </View>
      <View>
        <Field placeholder="Password"
          icon=""
          righttext="Forgot" 
          righttextstyle={styles.righttext}
        />
        
      </View>

      {/* Auto Login */}
      <View style={styles.clickable}>
        <Fontawesome name="square" size={15} color="gray" />
        <Text style={styles.spaced}>Auto login next time</Text>
      </View>

      {/* Button */}
      <View style={styles.button}>
        <Mybutton title="Login" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  Account: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'red',
    fontStyle: 'underline',
    textDecorationLine: 'underline',
  },
  clickable: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  righttext: {
    fontWeight: 'bold',
    color: 'blue',
    
  },
  spaced: {
    marginLeft: 10,
  }
});