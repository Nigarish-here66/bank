import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../components/headerwhite'; 
import CustomButton from '../components/longbutton'; 
import InputBox from '../components/inputfield';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 



const PasswordConfirmation = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Reusable Header */}
      <Header
        title="Confirm Password"
        onBackPress={() => navigation.goBack()}
        onHelpPress={() => alert('Help/Settings clicked')}
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>
          Please input your password before continuing payment
        </Text>

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <InputBox
            label="Password"
            value={password}
            placeholder="Enter password"
            secureTextEntry={secureText}
            onChangeText={(text) => setPassword(text)}
           
          />
          <Text style={styles.passwordHint}>Must be at least 8 characters.</Text>
        </View>
      </View>

      {/* Confirm Password Button */}
      <View style={styles.bottomContainer}>
        <CustomButton title="Confirm Password"  onPress={() => navigation.navigate('Payment')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0B1E',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center', 
  },
  instructionText: {
    fontSize: 16,
    color: '#9A9A9A', 
    marginBottom: 20,
  },
  passwordContainer: {
    marginTop: 10,
  },
  passwordHint: {
    fontSize: 12,
    color: '#9A9A9A', 
    marginTop: 5,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40, 
  },
});

export default PasswordConfirmation;