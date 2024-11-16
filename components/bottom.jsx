import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const BottomNavBar = () => {
  
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name="home" size={24} color="#888" />
          </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
        <FontAwesome5 name="chart-line" size={24} color="#888" />
          </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate('QR')}>
        <View style={styles.scanButton}>
          <FontAwesome5 name="qrcode" size={24} color="#FFF" />
              </View>
              
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <FontAwesome5 name="bell" size={24} color="#888" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesome5 name="user" size={24} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  scanButton: {
    width: 50,
    height: 50,
    backgroundColor: "#00CCAA", 
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
});

export default BottomNavBar;