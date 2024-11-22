// components/HeaderWhite.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
      
      {/* Back Icon */}
      {onBackPress ? (
        <TouchableOpacity 
          onPress={onBackPress} 
          style={styles.iconContainer} 
          accessibilityRole="button" 
          
        >
        <View style={styles.imgPlaceholder}><Image source={require('../assets/sikka.png')} style={styles.image} /></View> 
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      {/* Title */}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>

      {/* Help Icon */}
      {onHelpPress ? (
        <TouchableOpacity 
          onPress={onHelpPress} 
          style={styles.iconContainer} 
          accessibilityRole="button" 
          accessibilityLabel="Get help"
        >
          <FontAwesome5  name="sign-out-alt" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  iconContainer: {
    padding: 10,
  },
  iconPlaceholder: {
    width: 40, // To maintain spacing and alignment when an icon is absent
  },
  title: {
    fontSize: 20,
    fontFamily: 'LilitaOne_400Regular',
    flex: 1,
    textAlign: 'center',
  },
  imgPlaceholder: {
    width: 30, // To maintain spacing and alignment when an icon is absent
  },
  image: {
    width: 60,
    height: 40,
  },
});

export default HeaderWhite;
