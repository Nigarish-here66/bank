import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Platform,ScrollView,Alert} from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAccount = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.topContainer}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity
          style={styles.createAccount}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.createAccountText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.loginText}>Create Account</Text>
          <View style={styles.inputContainer}>
            <ReusableTextInput
              placeholder="Email"
              icon="envelope"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <ReusableTextInput
              placeholder="Password"
              icon="lock"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <ReusableTextInput
              placeholder="Phone (Optional)"
              icon="phone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ReusableButton
              title="Create"
              icon="arrow-right"
              onPress={handleCreateAccount}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  },
  inputContainer: {
    marginTop: 40,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  scrollViewContainer: {
    paddingBottom: 40,
  }
});
