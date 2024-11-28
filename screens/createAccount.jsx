import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReusableTextInput from '../components/inputfield';
import ReusableButton from '../components/button';
import { ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, database } from '../firebase';
import { ref, set } from 'firebase/database';
import { Formik } from 'formik';
import * as Yup from 'yup'; // For validation 

const CreateAccount = ({ navigation }) => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Function to handle user signup with Firebase integration
  const handleSignup = async (values, { setSubmitting, setFieldError }) => {
    const { name, email, password, phoneNumber } = values;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Generate a random balance
      const randomBalance = (Math.random() * (2000 - 1000) + 1000).toFixed(2);

      // Save additional user data in Firebase Realtime Database
      await set(ref(database, `users/${uid}`), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        balance: randomBalance,
        createdAt: new Date().toISOString(),
      });

      // Sign the user out after successful registration
      await signOut(auth);

      // Navigate to the Login screen
      navigation.navigate('Login');
    } catch (error) {
      setFieldError('general', error.message); // Display Firebase error messages
    } finally {
      setSubmitting(false); // Stop the form submission spinner
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

        {/* Formik form */}
        <Formik
          initialValues={{
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <View style={styles.inputContainer}>
                {/* Name Input Field */}
                <ReusableTextInput
                  placeholder="Full Name"
                  icon="user"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  keyboardType="default"
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                {/* Email Input Field */}
                <ReusableTextInput
                  placeholder="jone@deper.one"
                  icon="envelope"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                {/* Password Input Field */}
                <ReusableTextInput
                  placeholder="Password"
                  icon="lock"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {/* Confirm Password Input Field */}
                <ReusableTextInput
                  placeholder="Confirm Password"
                  icon="lock"
                  secureTextEntry={true}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}

                {/* Phone Number Input Field */}
                <ReusableTextInput
                  placeholder="+92 000 0000000"
                  icon="phone"
                  keyboardType="phone-pad"
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                )}
              </View>

              {/* Display general error messages */}
              {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}

              {/* Display signup button or loading spinner */}
              <View style={styles.buttonContainer}>
                {isSubmitting ? (
                  <ActivityIndicator size="medium" color="#C711DFFF" />
                ) : (
                  <ReusableButton
                    title="Sign Up"
                    icon="arrow-right"
                    onPress={handleSubmit}
                  />
                )}
              </View>
            </>
          )}
        </Formik>
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
    color: '#C711DFFF',
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});
