import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomTextInput = ({
  icon,
  iconSize = 18,
  placeholder,
  placeholderColor = '#A1A1A1',
  secureTextEntry = false,
  keyboardType = 'default',
  value,
  onChangeText,
  rightText,
  rightTextStyle,
  onRightTextPress,
  inputStyle,
  containerStyle,
  iconColor = '#FFFFFF',
  errorMessage,
  errorTextStyle,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <>
      <View style={[styles.inputContainer, containerStyle]}>
        {/* Icon on the left */}
        {icon && (
          <FontAwesome5
            name={icon}
            size={iconSize}
            color={iconColor}
            style={styles.icon}
            accessibilityLabel={`Icon for ${placeholder}`}
          />
        )}

        {/* TextInput field */}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && isSecure}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          accessibilityLabel={placeholder}
        />

        {/* Toggle for secure text (SHOW/HIDE) */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecure(!isSecure)}
            style={styles.toggleVisibility}
            accessibilityLabel={`Toggle secure text visibility for ${placeholder}`}>
            <Text style={styles.toggleText}>{isSecure ? 'SHOW' : 'HIDE'}</Text>
          </TouchableOpacity>
        )}

        {/* Optional right text */}
        {rightText && (
          <TouchableOpacity
            onPress={onRightTextPress}
            accessibilityLabel={rightText}>
            <Text style={[styles.rightText, rightTextStyle]}>{rightText}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {errorMessage && (
        <Text style={[styles.errorText, errorTextStyle]}>{errorMessage}</Text>
      )}
    </>
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
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  toggleVisibility: {
    marginLeft: 10,
  },
  toggleText: {
    color: '#A1A1A1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 14,
    color: '#6A6A6A',
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default CustomTextInput;
