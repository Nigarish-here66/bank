import React, { useState } from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TokenPopupScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => navigation.goBack()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>You won a gold chest</Text>
          <Image source={require('../assets/treasure.png')} style={styles.chestImage} />
          <View style={styles.checklist}>
            {[true, true, true, true, false].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.checkItem,
                  item ? styles.checkActive : styles.checkInactive,
                ]}
              >
                {item && <Ionicons name="checkmark" size={16} color="white" />}
              </View>
            ))}
          </View>

          {/* Claim button */}
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
