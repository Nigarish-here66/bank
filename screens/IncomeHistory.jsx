import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IncomeHistory = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Income History</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Total Income Section */}
      <View style={styles.incomeContainer}>
        <Text style={styles.incomeAmount}>46,438.00 USD</Text>
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

        {/* Today’s Transactions */}
        <View style={styles.transactionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="gift-outline" size={24} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Bonuses</Text>
            <Text style={styles.transactionDate}>11-03-2019</Text>
          </View>
          <Text style={styles.transactionAmount}>+200</Text>
        </View>

        <View style={[styles.transactionItem, styles.selectedTransaction]}>
          <View style={[styles.iconContainer, { backgroundColor: '#00C3F9' }]}>
            <Ionicons name="gift-outline" size={24} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Gift</Text>
            <Text style={styles.transactionDate}>06-03-2019</Text>
          </View>
          <Text style={styles.transactionAmount}>+500</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="gift-outline" size={24} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Gift</Text>
            <Text style={styles.transactionDate}>10-03-2019</Text>
          </View>
          <Text style={styles.transactionAmount}>+200</Text>
        </View>

        {/* Yesterday’s Transactions */}
        <Text style={styles.subHeader}>Yesterday</Text>
        <View style={styles.transactionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="calendar-outline" size={24} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Others</Text>
            <Text style={styles.transactionDate}>01-03-2019</Text>
          </View>
          <Text style={styles.transactionAmount}>+200</Text>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="calendar-outline" size={24} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Monthly Salary</Text>
            <Text style={styles.transactionDate}>12-03-2019</Text>
          </View>
          <Text style={styles.transactionAmount}>+1400</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  incomeContainer: {
    alignItems: 'center',
    marginVertical: 20,
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
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 4,
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
    color: '#4CAF50',
  },
});

export default IncomeHistory;
