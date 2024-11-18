import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyHeader from '../components/headerblack';
import Bottom from "../components/bottom";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.containerheader}>
      {/* Header */}
      <MyHeader title='Dashboard' onBackPress={() => navigation.goBack()} onHelpPress={() => alert('Help/Settings clicked')}/>

      <ScrollView style={styles.container}>
        {/* Total Balance Section */}
        <Text style={styles.header}>Total Balance</Text>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceAmount}>425.97 USD</Text>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageText}>+4.24%</Text>
          </View>
        </View>

        {/* Balance Details */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Positions</Text>
            <Text style={styles.detailValue}>1950.00 USD</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>Cash</Text>
            <Text style={styles.detailValue}>250.00 USD</Text>
          </View>
        </View>

        {/* Income History Button */}
        <TouchableOpacity
          style={styles.incomeHistoryButton}
          onPress={() => navigation.navigate('IncomeHistory')}
        >
          <Text style={styles.buttonText}>View Income History</Text>
        </TouchableOpacity>

        {/* Token Bonus Section */}
        <View style={styles.tokenHeaderContainer}>
          <Text style={styles.sectionTitle}>Token Bonus</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
        </View>

        <View style={styles.tokenSection}>
          <View style={styles.tokenBox}>
            <Text style={styles.tokenPercentage}>12%</Text>
            <Text style={styles.tokenDescription}>Tokens to buy for 13%</Text>
            <Text style={styles.tokenAmount}>330BTN</Text>
          </View>
          <View style={styles.bonusBoxContainer}>
            <View style={styles.bonusBox}>
              <Text style={styles.bonusText}>Bonus received</Text>
              <Text style={styles.bonusAmount}>$22.42</Text>
            </View>
            <View style={styles.bonusBox}>
              <Text style={styles.bonusText}>Bonus received</Text>
              <Text style={styles.bonusAmount}>$22.42</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.getTokenButton}>
            <Ionicons name="gift" size={20} color="#fff" />
            <Text style={styles.buttonText}>Get Tokens</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.borrowTokenButton}>
            <Ionicons name="ios-attach" size={20} color="#fff" />
            <Text style={styles.buttonText}>Borrow Tokens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  containerheader: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  percentageContainer: {
    backgroundColor: '#00CCAA',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  percentageText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#888',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tokenHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  newBadge: {
    backgroundColor: '#FF4081',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginLeft: 20,
    marginBottom: 6,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  tokenSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tokenBox: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'blue',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 7,
  },
  tokenPercentage: {
    color: '#00CCAA',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tokenDescription: {
    color: '#ccc',
    marginTop: 5,
    textAlign: 'center',
  },
  tokenAmount: {
    color: '#00CCAA',
    fontSize: 18,
    marginTop: 5,
  },
  bonusBoxContainer: {
    flex: 1,
  },
  bonusBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 7,
  },
  bonusText: {
    fontSize: 14,
    color: '#888',
  },
  bonusAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  getTokenButton: {
    flex: 1,
    backgroundColor: '#00CCAA',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  borrowTokenButton: {
    flex: 1,
    backgroundColor: '#FF4081',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  incomeHistoryButton: {
    backgroundColor: '#00CCAA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default Dashboard;
