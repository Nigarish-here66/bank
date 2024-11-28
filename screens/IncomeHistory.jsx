import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderBlack from '../components/headerblack';
import Bottom from "../components/bottom";

const IncomeHistory = ({ navigation }) => {
  return (

    // Main container with a background image
    <ImageBackground 
      source={require('../assets/image.png')} 
      style={styles.container}  
      imageStyle={{ opacity: 0.9 }} 
    >
      {/* Header Component */}
      <HeaderBlack title="Income History" onBackPress={() => navigation.goBack()} />

      <ScrollView style={styles.innercontainer}>
        
        {/* Total Income Section */}
        <View style={styles.incomeContainer}>
          <Text style={styles.incomeAmount}>46,438.02 PKR</Text>
          <Text style={styles.incomeLabel}>Total Income</Text>
        </View>

        {/* Transactions Section */}
        <View style={styles.transactionsContainer}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>New</Text>
            </View>
          </View>

          {/* Transactions List */}
          <View>
            <Text style={styles.subHeader}>Today</Text>
            <TransactionItem
              icon="gift-outline"
              title="Bonuses"
              date="11-03-2019"
              amount="+200"
            />
            <TransactionItem
              icon="gift-outline"
              title="Gift"
              date="06-03-2019"
              amount="+500"
              isSelected 
            />
            <TransactionItem
              icon="gift-outline"
              title="Gift"
              date="10-03-2019"
              amount="+200"
            />

            {/* Yesterday’s Transactions */}
            <Text style={styles.subHeader}>Yesterday</Text>
            <TransactionItem
              icon="calendar-outline"
              title="Others"
              date="01-03-2019"
              amount="+200"
            />
            <TransactionItem
              icon="gift-outline"
              title="Bonuses"
              date="11-03-2019"
              amount="+200"
            />
            <TransactionItem
              icon="calendar-outline"
              title="Monthly Salary"
              date="12-03-2019"
              amount="+1400"
            />
            <TransactionItem
              icon="calendar-outline"
              title="Others"
              date="01-03-2019"
              amount="+200"
            />
            <TransactionItem
              icon="calendar-outline"
              title="Monthly Salary"
              date="12-03-2019"
              amount="+1400"
            />
            <TransactionItem
              icon="gift-outline"
              title="Bonuses"
              date="11-03-2019"
              amount="+200"
            />
            <TransactionItem
              icon="gift-outline"
              title="Bonuses"
              date="11-03-2019"
              amount="+200"
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation component */}
      <Bottom />
    </ImageBackground>
  );
};

// Reusable component to render individual transaction items
const TransactionItem = ({ icon, title, date, amount, isSelected }) => {
  return (
    <View 
      style={[
        styles.transactionItem, 
        isSelected && styles.selectedTransaction 
      ]}
    >
      {/* Icon container with optional styling for selected items */}
      <View 
        style={[
          styles.iconContainer, 
          isSelected && { backgroundColor: '#00C3F9' } 
        ]}
      >
        {/* Displays the icon */}
        <Ionicons name={icon} size={24} color="white" />
      </View>

      {/* Transaction details (title and date) */}
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionDate}>{date}</Text>
      </View>

      {/* Displays the transaction amount */}
      <Text style={styles.transactionAmount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innercontainer: {
    padding: 20,
  },
  incomeContainer: {
    alignItems: 'center',
  },
  incomeAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  incomeLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  transactionsContainer: {
    marginTop: 10,
  },
  transactionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newBadge: {
    backgroundColor: '#FF4081',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 20,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 2,
  },
  selectedTransaction: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  iconContainer: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#aaa',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00CCAA',
  },
});

export default IncomeHistory;