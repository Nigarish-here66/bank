// components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderBlack = ({ 
  title, 
  onBackPress, 
  onHelpPress, 
  iconColor = 'black', 
  iconSize = 20 
}) => {
  return (
    <View style={styles.container}>
      {/* Back Icon */}
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <FontAwesome5 name="arrow-left" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Help/Settings Icon */}
      {onHelpPress ? (
        <TouchableOpacity onPress={onHelpPress} style={styles.iconContainer}>
          <FontAwesome5 name="question-circle" size={iconSize} color={iconColor} />
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
    paddingVertical: 10,
    marginVertical: 10,
  },
  iconContainer: {
    padding: 10,
  },
  iconPlaceholder: {
    width: 40, // Ensures alignment if no icon is rendered
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default HeaderBlack;
