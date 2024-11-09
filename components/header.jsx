// components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

const Header = ({ title, onBackPress, onHelpPress }) => {
  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <FontAwesome5 name="arrow-left" size={20} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Help/Settings Icon */}
      <TouchableOpacity onPress={onHelpPress} style={styles.iconContainer}>
        <FontAwesome5 name="question-circle" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 45,
     
  },
  iconContainer: {
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;