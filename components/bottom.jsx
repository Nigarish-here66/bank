import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Bottom Navigation Bar Component
const BottomNavBar = ({ activeScreen }) => {
  const navigation = useNavigation(); 

  // Determines the icon color. Active screen icons will have a highlighted color.
  const getIconColor = (screen) => (screen === activeScreen ? '#00CCAA' : 'black');

  return (
    <View style={styles.container}>
      {/* Home button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
        style={styles.iconContainer}
        activeOpacity={0.7} // Adds a fade effect when pressed.
      >
        {/* Home icon */}
        <FontAwesome5 name="home" size={24} color={getIconColor('Home')} /> 
      </TouchableOpacity>

      {/* Statistics button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Statistics')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
      {/* Statistics icon */}
        <FontAwesome5 name="chart-line" size={24} color={getIconColor('Statistics')} /> 
      </TouchableOpacity>

      {/* Centered QR Scan button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('QR')} 
        style={styles.scanButtonContainer}
        activeOpacity={0.7}
      >
        {/* Adds a gradient background for the QR button */}
        <LinearGradient
          colors={['#7F00FF', '#E100FF']} 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 1 }} 
          style={styles.scanButtonGradient}
        >
          <View style={styles.scanButtonContent}>
            {/* QR icon */}
            <FontAwesome5 name="qrcode" size={24} color="#FFF" /> 
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Notification button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Notification')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
         {/* Bell icon */}
        <FontAwesome5 name="bell" size={24} color={getIconColor('Notification')} />
      </TouchableOpacity>

      {/* Profile button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('MyAccount')} 
        style={styles.iconContainer}
        activeOpacity={0.7}
      >
      {/* User/Profile icon */}
        <FontAwesome5 name="user" size={24} color={getIconColor('Profile')} /> 
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Bottom Navigation Bar
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#FFFFFF', 
    paddingVertical: 16, 
    borderTopLeftRadius: 16, 
    borderTopRightRadius: 16, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -4 }, // Shadow offset.
    shadowOpacity: 0.2, 
    shadowRadius: 10, 
    elevation: 5, 
  },
  iconContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  scanButtonContainer: {
    flex: 1, 
    alignItems: 'center', 
    marginTop: -30, // Slightly raises the QR button to stand out.
  },
  scanButtonGradient: {
    width: 60, 
    height: 60, 
    borderRadius: 30, // Makes the button circular.
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
    borderRadius: 30, // Matches the gradient button's circular shape.
  },
});

export default BottomNavBar;
