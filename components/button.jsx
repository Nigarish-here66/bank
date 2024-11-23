import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ title, onPress, disabled = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.buttonContainer}
      onPress={!disabled ? onPress : null}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={title}
      disabled={disabled}
    >
      {!disabled ? (
        <LinearGradient
          colors={['#7F00FF', '#E100FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.buttonGradient, styles.buttonDisabled]}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    overflow: 'hidden', 
  },
  buttonGradient: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
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
