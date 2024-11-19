import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { ActivityIndicator } from 'react-native';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const CreateAccount = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Login');
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleSignup = async () => {
    if (!email || !password || !phoneNumber) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.topContainer}>

      {/* "Create account" link */}
      <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.container}>

        <Text style={styles.loginText}>Create Account</Text>
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
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {/* Phone number Input Field */}
          <ReusableTextInput
            placeholder="+92 000 0000000"
            icon="phone"
            iconColor="#00D100"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="medium" color="#FF5063" />
          ) : (
            <ReusableButton
              title="Sign Up"
              icon="arrow-right"
              onPress={handleSignup}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

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
    fontFamily: 'LilitaOne_400Regular',
    color: '#00CCAA',
  },
  createAccount: {
    top: 50,
    alignItems: 'flex-end',
  },
  createAccountText: {
    color: '#00CCAA',
    fontSize: 16,
    fontFamily: 'LilitaOne_400Regular',
  },
  inputContainer: {
    marginTop: 40,
  },
  forgotText: {
    color: '#4A90E2',
    fontSize: 14,
    fontFamily: 'LilitaOne_400Regular',
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'LilitaOne_400Regular',
    marginBottom: 10,
  },
});