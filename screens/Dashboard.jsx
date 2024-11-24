import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyHeader from '../components/headerblack'; 
import Bottom from '../components/bottom'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { auth, database } from '../firebase'; 
import { ref, onValue } from 'firebase/database'; // Firebase Realtime Database methods

const Dashboard = ({ navigation }) => {
  
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current logged-in user
    const currentUser = auth.currentUser;

    if (currentUser) {
      // Reference to the user's data in Firebase Realtime Database
      const userRef = ref(database, `users/${currentUser.uid}`);

      // Set up a real-time listener for user data
      const unsubscribe = onValue(
        userRef,
        (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            // Set the user's name and balance from fetched data
            setUserName(userData.name || '');
            setBalance(userData.balance || 0);
          }
          // Stop loading once data is fetched
          setLoading(false);
        },
        (error) => {
          console.error('Error fetching user data:', error);
          setLoading(false); // Stop loading even if there's an error
        }
      );

      // Clean up the listener when the component unmounts
      return () => {
        unsubscribe();
      };
    }
  }, []);

  return (
    <ImageBackground
      source={require('../assets/image.png')} 
      style={styles.container}
      imageStyle={{ opacity: 0.9 }} 
    >
      {/* Header Component */}
      <MyHeader
        title="Dashboard" 
        onBackPress={() => navigation.goBack()} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Total Balance Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Total Balance</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceAmount}>
              {loading ? '...' : `${balance} PKR`} {/* Show balance or loading state */}
            </Text>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageText}>+4.24%</Text> 
            </View>
          </View>

          {/* Details for positions and cash */}
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Positions</Text>
              <Text style={styles.detailValue}>1950.00 PKR</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Cash</Text>
              <Text style={styles.detailValue}>250.00 PKR</Text>
            </View>
          </View>
        </View>

        {/* Button to View Income History */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('IncomeHistory')} 
        >
          <LinearGradient
            colors={['#7F00FF', '#E100FF']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>View Income History</Text>
          </LinearGradient>
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

            {/* Token Box */}
            <View style={styles.tokenBox}>
              <Text style={styles.tokenPercentage}>12%</Text>
              <Text style={styles.tokenDescription}>Tokens to buy for 13%</Text>
              <Text style={styles.tokenAmount}>330 BTN</Text>
            </View>

            {/* Bonus Boxes */}
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
          {/* Get Tokens Button */}
          <TouchableOpacity
            style={styles.actionButtonPrimary}
            onPress={() => navigation.navigate('TokenPopup')}
          >
            <Ionicons name="gift" size={20} color="#fff" />
            <Text style={styles.buttonText}>Get Tokens</Text>
          </TouchableOpacity>

          {/* Borrow Tokens Button */}
          <TouchableOpacity
            style={styles.actionButtonSecondary}
            onPress={() => {
              Alert.alert(
                'Borrow Tokens',
                'Are you sure you want to borrow tokens?',
                [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Confirm', onPress: () => console.log('Tokens borrowed!') },
                ]
              );
            }}
          >
            <Ionicons name="ios-attach" size={20} color="#fff" />
            <Text style={styles.buttonText}>Borrow Tokens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <Bottom />
    </ImageBackground>
  );
};

// Styles for the component
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
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  gradientButton: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});

export default Dashboard;
