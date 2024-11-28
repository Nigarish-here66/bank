import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Login = ({ navigation }) => {
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

  // Login Validation Schema using Yup
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
  // Function to handle user login
  const handleLogin = async (values) => {
    setLoading(true); // Set loading state to true while login is in progress
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
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
        <Text style={styles.loginText}>Login</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.inputContainer}>
              {/* Email Input Field */}
              <ReusableTextInput
                placeholder="jone@deper.one"
                icon="envelope"
                iconColor="#00D100"
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              {/* Password Input Field */}
              <ReusableTextInput
                placeholder="Password"
                icon="lock"
                iconColor="#6A6A6A"
                rightText="FORGOT"
                rightTextStyle={styles.forgotText}
                onRightTextPress={() => alert('Forget Password')}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              {/* Error Message */}
              {error && <Text style={styles.errorText}>{error}</Text>}

              {/* Login Button */}
              <View style={styles.buttonContainer}>
                {loading ? (
                   // Show loading indicator if login is in progress
                  <ActivityIndicator size="medium" color="#E100FFB2" />
                ) : (
                  <ReusableButton title="Login" icon="arrow-right" onPress={handleSubmit} />
                )}
              </View>
            </View>
          )}
        </Formik>
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
    color: '#C711DFFF',
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
