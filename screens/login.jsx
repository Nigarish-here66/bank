import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.topContainer}>
      {/* "Create account" link */}
      <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('CreateAccount')}>
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
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="medium" color= '#E100FFB2' />
          ) : (
            <ReusableButton title="Login" icon="arrow-right" onPress={handleLogin} />
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
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    color:  '#C711DFFF',
    fontFamily: 'LilitaOne_400Regular',
  },
  createAccount: {
    top: 50,
    alignItems: 'flex-end',
  },
  createAccountText: {
    color: '#C711DFFF',
    fontSize: 16,
    fontFamily: 'LilitaOne_400Regular',
  },
  inputContainer: {
    marginTop: 40,
  },
  forgotText: {
    color: '#4A90E2',
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});