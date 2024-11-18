import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogin = async () => {
    if (!email || !Password) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, Password);
      navigation.navigate('Home');
    }
    catch (error) {
      alert(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  
  return (
    <View style={styles.topContainer}>


      {/* "Create account" link */}
      <TouchableOpacity style={styles.createAccount}  onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>



      <View style={styles.container}>

        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          {/* Email Input Field */}
          <ReusableTextInput
            placeholder="jone@deper.one"
            icon="envelope"
            iconColor="#00D100"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input Field */}
          <ReusableTextInput
            placeholder="Password"
            icon="lock"
            iconColor="#6A6A6A"
            rightText="FORGOT"
            rightTextStyle={styles.forgotText}
            onRightTextPress={() => alert('Forget Password')}
            value={Password}
            onChangeText={setPassword}
          />
        </View>



        {/* Login Button */}
        <View style={styles.buttonContainer}>
         {loading ?(
          <ActivityIndicator size="medium" color="#FF5063" />
         ):(
          <ReusableButton
            title="Login"
            icon="arrow-right"
            onPress={handleLogin}
          />
         )}
          
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#0D0B1E',
    paddingHorizontal: 20,
    marginTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',

  },
  createAccount: {
    top: 50,

    alignItems: 'flex-end',

  },
  createAccountText: {
    color: '#00CCAA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 40,
  },
  forgotText: {
    color: '#4A90E2',
    fontSize: 14,
  },

  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

});