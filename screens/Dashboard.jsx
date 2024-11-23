import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyHeader from '../components/headerblack';
import Bottom from '../components/bottom';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <MyHeader
        title="Dashboard"
        onBackPress={() => navigation.goBack()}
       
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Total Balance Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Total Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceAmount}>425.97 USD</Text>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageText}>+4.24%</Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Positions</Text>
              <Text style={styles.detailValue}>1950.00 USD</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Cash</Text>
              <Text style={styles.detailValue}>250.00 USD</Text>
            </View>
          </View>
        </View>

        {/* Income History Button */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('IncomeHistory')}
        >
          <Text style={styles.buttonText}>View Income History</Text>
        </TouchableOpacity>

        {/* Token Bonus Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Token Bonus</Text>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>New</Text>
            </View>
          </View>
          <View style={styles.tokenSection}>
            <View style={styles.tokenBox}>
              <Text style={styles.tokenPercentage}>12%</Text>
              <Text style={styles.tokenDescription}>Tokens to buy for 13%</Text>
              <Text style={styles.tokenAmount}>330 BTN</Text>
            </View>
            <View style={styles.bonusBoxContainer}>
              <View style={styles.bonusBox}>
                <Text style={styles.bonusLabel}>Bonus received</Text>
                <Text style={styles.bonusAmount}>$22.42</Text>
              </View>
              <View style={styles.bonusBox}>
                <Text style={styles.bonusLabel}>Bonus received</Text>
                <Text style={styles.bonusAmount}>$22.42</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.actionButtonPrimary}
            onPress={() => navigation.navigate("TokenPopup")}>
            <Ionicons name="gift" size={20} color="#fff" />
            <Text style={styles.buttonText}>Get Tokens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButtonSecondary}
            onPress={() => {
              Alert.alert(
                "Borrow Tokens",
                "Are you sure you want to borrow tokens?",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Confirm", onPress: () => console.log("Tokens borrowed!") }
                ]
              );
            }}>
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  newBadge: {
    backgroundColor: '#FF4081',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
  },
  percentageContainer: {
    backgroundColor: '#4caf50',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  percentageText: {
    color: '#fff',
    fontSize: 14,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#888',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tokenSection: {
    flexDirection: 'row',
  },
  tokenBox: {
    flex: 1,
    backgroundColor: '#2C5364',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
  tokenPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  tokenDescription: {
    color: '#ccc',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  tokenAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
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
    elevation: 4,
  },
  bonusLabel: {
    fontSize: 14,
    color: '#888',
  },
  bonusAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButtonPrimary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 10,
    paddingVertical: 15,
    marginRight: 10,
  },
  actionButtonSecondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4081',
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  actionButton: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Dashboard;
