import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, database } from '../firebase';
import { ref, set } from 'firebase/database';


const CreateAccount = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('0'); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [confirmPassword, setConfirmPassword] = useState(''); 

  // Generate a random initial balance for the user when the component mounts
  useEffect(() => {
    const randomBalance = (Math.random() * (2000 - 1000) + 1000).toFixed(2);
    setBalance(randomBalance);
  }, []);

  // Function to handle user signup with validation and Firebase integration
  const handleSignup = async () => {
    // Validate form inputs
    if (!email || !password || !name || !phoneNumber || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true); // Start loading spinner
    try {
      // Create user with email and password in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Save additional user data in the Firebase Realtime Database
      await set(ref(database, `users/${uid}`), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        balance: balance,
        createdAt: new Date().toISOString()
      });

      // Sign the user out after successful registration
      await signOut(auth);

      // Navigate to the Login screen
      navigation.navigate('Login');
    } catch (error) {
      setError(error.message); // Display Firebase error messages
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <View style={styles.topContainer}>
      {/* Navigate to the Login screen */}
      <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.loginText}>Create Account</Text>

        {/* Input fields for account creation */}
        <View style={styles.inputContainer}>
          {/* Name Input Field */}
          <ReusableTextInput
            placeholder="Full Name"
            icon="user"
            value={name}
            onChangeText={setName}
            keyboardType="default"
          />

          {/* Email Input Field */}
          <ReusableTextInput
            placeholder="jone@deper.one"
            icon="envelope"
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

          {/* Confirm Password Input Field */}
          <ReusableTextInput
            placeholder="Confirm Password"
            icon="lock"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Phone Number Input Field */}
          <ReusableTextInput
            placeholder="+92 000 0000000"
            icon="phone"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Display error messages, if any */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Display signup button or loading spinner */}
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="medium" color='#C711DFFF' />
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

// Styles for the CreateAccount component
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
    color:  '#C711DFFF',
  },
  createAccount: {
    top: 50,
    alignItems: 'flex-end',
  },
  createAccountText: {
    color:  '#C711DFFF',
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
