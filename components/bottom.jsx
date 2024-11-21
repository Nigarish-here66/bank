import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = ({ activeScreen }) => {
  const navigation = useNavigation();

  const getIconColor = (screen) => (screen === activeScreen ? '#00CCAA' : '#888');

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="home" size={24} color={getIconColor('Home')} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Statistics')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="chart-line" size={24} color={getIconColor('Statistics')} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('QR')} 
        style={styles.scanButtonContainer}
        activeOpacity={0.7}
      >
        <View style={styles.scanButton}>
          <FontAwesome5 name="qrcode" size={24} color="#FFF" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Notification')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="bell" size={24} color={getIconColor('Notification')} />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('MyAccount')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
        <FontAwesome5 name="user" size={24} color={getIconColor('Profile')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scanButtonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: -30,
  },
  scanButton: {
    width: 60,
    height: 60,
    backgroundColor: '#00CCAA',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // For Android shadow
  },
});

export default BottomNavBar;
