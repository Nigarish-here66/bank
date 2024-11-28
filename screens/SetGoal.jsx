import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import CustomButton from '../components/button';  
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');  

const SetGoals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Right 'Create account' */}
      <TouchableOpacity 
        style={styles.createAccount} 
        onPress={() => navigation.navigate('CreateAccount')}
        accessibilityLabel="Create a new account"
        accessibilityHint="Navigates to the account creation screen"
      >
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      {/* Main Content: Regular Image */}
      <Image 
        source={require('../assets/running.png')} 
        style={styles.image}
        accessibilityRole="image"
        accessibilityLabel="An image of someone running to represent setting goals"
      />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>SET YOUR</Text>
        <Text style={styles.titleText}>FINANCIAL GOALS</Text>
        <Text style={styles.subText}>
          You can track your progress and achievements in a special section
        </Text>
      </View>

      {/* Bottom Section with Login Button */}
      <View style={styles.bottomContainer}>
        <CustomButton 
          title="Login" 
          onPress={() => navigation.navigate('Login')} 
          style={styles.loginButton}
          accessibilityLabel="Login to your account"
          accessibilityHint="Navigates to the login screen"
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0B1E',  
    paddingHorizontal: 20,
    marginTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  createAccount: {
    position: 'absolute',
    top: 30,
    right: 20,
    alignItems: 'flex-end',
  },
  createAccountText: {
    color:   '#C711DFFF', 
    textDecorationLine: 'underline',
    fontSize: 16,
    fontFamily: 'LilitaOne_400Regular',
  },
  image: {
    width: '100%',
    height: height * 0.3, 
    resizeMode: 'contain',
    marginTop: 150, 
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF', 
  },
  subText: {
    fontSize: 14,
    fontFamily: 'Lobster_400Regular',
    color: '#A1A1A1', 
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    maxWidth: '70%', 
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,  
  },
  loginButton: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
});

export default SetGoals;