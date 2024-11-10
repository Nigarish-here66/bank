import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';

const Login = ({ navigation }) => {

  const [isAutoLogin, setAutoLogin] = useState(false);
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
          />

          {/* Password Input Field */}
          <ReusableTextInput
            placeholder="Password"
            icon="lock"
            iconColor="#6A6A6A"

            rightText="FORGOT"
            rightTextStyle={styles.forgotText}
            onRightTextPress={() => alert('Forget Password')}
          />
        </View>



        {/* Login Button */}
        <View style={styles.buttonContainer}>
          <ReusableButton
            title="Login"
            icon="arrow-right"
            onPress={() => navigation.navigate('Home')}

          />
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

});