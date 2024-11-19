import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const LongButton = ({
  title,
  onPress,
  backgroundColor = "#00CCAA",
  textColor = "#FFFFFF",
  borderRadius = 40,
  isLoading = false,
  isDisabled = false,
  width = "80%", // Default width of 80%
}) => {
  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isDisabled ? "#A1A1A1" : backgroundColor, borderRadius },
        ]}
        onPress={isDisabled || isLoading ? null : onPress}
        disabled={isDisabled || isLoading}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={textColor} />
        ) : (
          <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

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
