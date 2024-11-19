import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ title, onPress, disabled = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={!disabled ? onPress : null}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={title}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    backgroundColor: "#00CCAA",
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: "#A9A9A9",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'LilitaOne_400Regular',
    
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;
