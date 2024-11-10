import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Scanner = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.headerText}>Summary Transaction</Text>
        <Ionicons name="settings-outline" size={24} color="black" style={styles.settingsIcon} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual logo URL
          style={styles.logo}
        />
      </View>

      <View style={styles.transactionInfo}>
        <Text style={styles.merchantText}>Starbucks Coffee</Text>
        <Text style={styles.dateText}>Payment on Dec 2, 2020</Text>
        <Text style={styles.amountText}>$15.00</Text>
      </View>

      <View style={styles.feeContainer}>
        <Ionicons name="information-circle-outline" size={20} color="black" style={styles.infoIcon} />
        <Text style={styles.feeText}>Payment fee $2 has been applied</Text>
      </View>

      <Text style={styles.chooseCardText}>Choose Cards</Text>

      <View style={styles.cardContainer}>
        <View style={styles.cardDetails}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} // Replace with actual card image URL
            style={styles.cardImage}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Wally Virtual Card</Text>
            <Text style={styles.cardNumber}>0318-1608-2105</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color="black" />
        </View>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backIcon: {
    marginLeft: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsIcon: {
    marginRight: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  transactionInfo: {
    alignItems: 'center',
    marginVertical: 16,
  },
  merchantText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#ff9f1c',
    marginVertical: 4,
  },
  amountText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  infoIcon: {
    marginRight: 8,
  },
  feeText: {
    fontSize: 14,
  },
  chooseCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 14,
    color: '#6c757d',
  },
  payButton: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    margin: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Scanner;
