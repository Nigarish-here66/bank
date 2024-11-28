
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import CustomButton from '../components/button';  
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window'); 
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';

const GetStarted = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
      Lobster_400Regular,
      LilitaOne_400Regular,
     
    });
  
    if (!fontsLoaded) { 
      return <View><Text>Loading...</Text></View>;
    }
  return (
    <View style={styles.container}>
      
      
     {/* Right-aligned Text Section */}
     <View style={styles.textContainer}>
          <Text style={styles.headerText}>Welcome to</Text>
          <Text style={styles.appName}>SIKKA</Text>
          <Text style={styles.description}>
            Your Wealth, Your Sikka
          </Text>
      </View>
      
      {/* Image Section */}
      <View style={styles.img}>
      <Image 
        source={require('../assets/splash.png')}
        style={styles.image}
      />
      </View>
      
      {/* Bottom Section with Purple Box and Button */}
      <View style={styles.bottomContainer}>
        <CustomButton title="Get Started" onPress={() => navigation.navigate('SetGoals')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  img: {
    
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: height * 0.65,
    resizeMode: 'contain',
   

  },
  textContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',  
    marginTop: 20,
    top: 80,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'LilitaOne_400Regular',
    // fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
    textAlign: 'right',  
  },
  appName: {
    fontSize: 48,
    fontFamily: 'LilitaOne_400Regular',
    // fontWeight: 'bold',
    color: '#E100FFB2',
    textAlign: 'right',  
  },
  description: {
    fontSize: 16,
    fontFamily: 'Lobster_400Regular',
    color: '#888',
    textAlign: 'right', 
    marginTop: 20,
    maxWidth: '60%',  
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.23,  
    backgroundColor: '#0D0B1E',  
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default GetStarted;



