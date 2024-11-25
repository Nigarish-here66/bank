// components/HeaderWhite.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderWhite = ({ 
  title, 
  onBackPress, 
  onHelpPress, 
  textColor = '#FFF', 
  iconColor = '#FFF', 
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
          accessibilityLabel="Go back"
        >
          <FontAwesome5 name="arrow-left" size={iconSize} color={iconColor} />
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
          <FontAwesome5 name="sign-out-alt" size={iconSize} color={iconColor} />
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
    paddingHorizontal: 5,
    paddingVertical: 35,
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
});

export default HeaderWhite;
