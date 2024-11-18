import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomTextInput = ({ icon, placeholder, secureTextEntry, keyboardType , rightText, rightTextStyle, onRightTextPress }) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={styles.inputContainer}>
      <FontAwesome5 name={icon} size={18} color="#FFFFFF" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A1A1A1"
        secureTextEntry={!isSecure}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Text style={styles.hideText}>{isSecure ? 'HIDE' : 'SHOW'}</Text>
        </TouchableOpacity>
      )}
      {rightText && (
        <TouchableOpacity onPress={onRightTextPress}>
          <Text style={[styles.rightText, rightTextStyle]}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1B2A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  hideText: {
    color: '#A1A1A1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 14,
    color: '#6A6A6A',
    textDecorationLine: 'underline',
  },

});

export default CustomTextInput;