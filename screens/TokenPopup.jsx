import React, { useState } from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const TokenPopupScreen = ({ navigation }) => {
 
  const [modalVisible, setModalVisible] = useState(true);

  return (

    // Modal component that shows up with an animation (slide from bottom)
    <Modal
      visible={modalVisible} 
      animationType="slide" 
      transparent={true} 
      onRequestClose={() => navigation.goBack()} 
    >
      {/* Container for the modal content */}
      <View style={styles.modalContainer}>

        {/* Popup content box */}
        <View style={styles.popup}>

          {/* Title of the popup */}
          <Text style={styles.title}>Congratulations!</Text>
          
          {/* Subtitle or message about the reward */}
          <Text style={styles.subtitle}>You won a gold chest</Text>
          
          {/* Image representing the gold chest reward */}
          <Image source={require('../assets/treasure.png')} style={styles.chestImage} />

          {/* Checklist to show progress or steps */}
          <View style={styles.checklist}>

            {/* Iterating over an array of booleans to display checkmarks */}
            {[true, true, true, true, false].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.checkItem, // base style for each item
                  item ? styles.checkActive : styles.checkInactive, // conditional styling for active/inactive items
                ]}
              >
                {/* Show a checkmark icon if the item is true */}
                {item && <Ionicons name="checkmark" size={16} color="white" />}
              </View>
            ))}
          </View>

          {/* Claim button to close the popup */}
          <TouchableOpacity
            style={styles.claimButton} 
            onPress={() => navigation.goBack()} 
          >
            <Text style={styles.claimButtonText}>Claim</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popup: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00FF00",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 16,
  },
  chestImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  checklist: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  checkItem: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  checkActive: {
    backgroundColor: "#28a745",
  },
  checkInactive: {
    backgroundColor: "#ddd",
  },
  claimButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  claimButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TokenPopupScreen;
