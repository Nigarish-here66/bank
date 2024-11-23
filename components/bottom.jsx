import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const BottomNavBar = ({ activeScreen }) => {
  const navigation = useNavigation();

  // Determines the icon color based on whether it's the active screen or not.
  const getIconColor = (screen) => (screen === activeScreen ? '#00CCAA' : 'black');

  return (
    <View style={styles.container}>
      {/* Navigation buttons for different screens */}
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

      {/* Centered QR scan button with a larger size and distinct style */}
      <TouchableOpacity 
      onPress={() => navigation.navigate('QR')} 
      style={styles.scanButtonContainer}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={['#7F00FF', '#E100FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.scanButtonGradient}
      >
        <View style={styles.scanButtonContent}>
          <FontAwesome5 name="qrcode" size={24} color="#FFF" />
        </View>
      </LinearGradient>
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

// Styles for the Bottom Navigation Bar, including layout, colors, and shadows.
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
  scanButtonGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, 
  },
  scanButtonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default BottomNavBar;
