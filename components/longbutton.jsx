import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// LongButton Component
const LongButton = ({
  title, 
  onPress, 
  backgroundColor = "#00CCAA", 
  textColor = "#FFFFFF", 
  borderRadius = 40, 
  isLoading = false, // Indicates whether a loading spinner should be displayed
  isDisabled = false, // Disables the button if true
  width = "80%", 
}) => {
  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity
        style={[styles.buttonContainer, { borderRadius }]}
        onPress={isDisabled || isLoading ? null : onPress}
        disabled={isDisabled || isLoading}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        {/* Displays a spinner if loading, otherwise the button text */}
        {isLoading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          
          <LinearGradient
            colors={['#7F00FF', '#E100FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.button, { borderRadius }]}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
          </LinearGradient>
        )}
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet 
const styles = StyleSheet.create({
  container: {
    marginVertical: 10, 
    alignSelf: "center", 
  },
  button: {
    alignItems: "center", 
    justifyContent: "center", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16, 
    lineHeight: 21, 
    fontFamily: 'LilitaOne_400Regular',
    letterSpacing: 0.25, 
  },
});

export default LongButton; 
