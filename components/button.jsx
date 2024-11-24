import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// Button Component
const Button = ({ title, onPress, disabled = false }) => {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.buttonContainer} 
        onPress={!disabled ? onPress : null} // Only trigger `onPress` if not disabled
        activeOpacity={0.8} 
        accessibilityRole="button" // Accessibility role for screen readers
        accessibilityLabel={title} // Accessibility label for screen readers
        disabled={disabled} 
      >
        {/* If the button is not disabled, render the gradient background */}
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
            
          // Render a flat gray background when the button is disabled
          <View style={[styles.buttonGradient, styles.buttonDisabled]}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Button component
const styles = StyleSheet.create({
  container: {
    marginVertical: 10, 
  },
  buttonContainer: {
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 40, 
    overflow: 'hidden', // Ensures content stays within the button bounds
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
    lineHeight: 21, // Line height for better readability
    fontFamily: 'LilitaOne_400Regular', 
    letterSpacing: 0.25, // Adds spacing between characters
    color: "white",
  },
});

export default Button;
