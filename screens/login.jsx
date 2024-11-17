import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redirect if user is already logged in
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
      setError('Please fill in both email and password.');
      return;
    }

    setLoading(true);
    setError(null); // Reset error before attempting login

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error.message);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.topContainer}>
      {/* Create Account Link */}
      <TouchableOpacity
        style={styles.createAccount}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>

        {/* Display Error Message */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.inputContainer}>
          {/* Email Input Field */}
          <ReusableTextInput
            placeholder="Enter your email"
            icon="envelope"
            iconColor="#00D100"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input Field */}
          <ReusableTextInput
            placeholder="Enter your password"
            icon="lock"
            iconColor="#6A6A6A"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            rightText="FORGOT"
            rightTextStyle={styles.forgotText}
            onRightTextPress={() =>
              Alert.alert('Forgot Password', 'Reset password feature coming soon!')
            }
          />
        </View>

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#FF5063" />
          ) : (
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
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createAccount: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  createAccountText: {
    color: '#FF5063',
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});
