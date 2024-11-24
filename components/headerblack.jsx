import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// HeaderWhite Component
const HeaderWhite = ({ 
  title, 
  onBackPress,
  onHelpPress, 
  textColor = 'black', 
  iconColor = 'black', 
  iconSize = 20 
}) => {
  return (
    <View style={styles.container}>
      
      {/* Back Icon: Displays an icon or image if onBackPress is provided */}
      {onBackPress ? (
        <TouchableOpacity 
          onPress={onBackPress} // Triggers the back press callback
          style={styles.iconContainer} 
          accessibilityRole="button" // For screen readers
        >
          {/* Logo or Icon as the Back Button */}
          <View style={styles.imgPlaceholder}>
            <Image source={require('../assets/sikka.png')} style={styles.image} />
          </View> 
        </TouchableOpacity>
      ) : (
        
        <View style={styles.iconPlaceholder} />
      )}

      {/* Title: Positioned in the center */}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>

      {/* Help/Logout Icon */}
      {onHelpPress ? (
        <TouchableOpacity 
          onPress={onHelpPress} 
          style={styles.iconContainer} 
          accessibilityRole="button" 
          accessibilityLabel="Sign Out" // Accessibility label for assistive devices
        >
          {/* FontAwesome icon for the help/logout button */}
          <FontAwesome5 name="sign-out-alt" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      ) : (
        
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
};

// Styles for the HeaderWhite component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 0,
    marginTop: 40, 
  },
  iconContainer: {
    padding: 10, 
  },
  iconPlaceholder: {
    width: 40, 
  },
  title: {
    fontSize: 20, 
    fontFamily: 'LilitaOne_400Regular', 
    flex: 1, 
    textAlign: 'center', 
  },
  imgPlaceholder: {
    width: 30, 
  },
  image: {
    width: 60, 
    height: 40, 
  },
});

export default HeaderWhite;
