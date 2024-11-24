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

  // Check for existing authentication state and navigate to Home if the user is already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Home'); 
      }
    });

    // Cleanup function to unsubscribe from the auth state listener
    return unsubscribe;
  }, [navigation]);

  // Function to handle user login
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true); // Set loading state to true while login is in progress
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
      {/* Link to "Create Account" screen */}
      <TouchableOpacity 
        style={styles.createAccount} 
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Login Title */}
        <Text style={styles.loginText}>Login</Text>

        {/* Input Fields */}
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

        {/* Error Message */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          {loading ? (

            // Show loading indicator if login is in progress
            <ActivityIndicator size="medium" color="#E100FFB2" />
          ) : (
              
            // Reusable login button
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