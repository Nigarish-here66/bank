import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Header from '../components/headerwhite'; 
import CustomButton from '../components/longbutton'; 
import InputBox from '../components/inputfield';
import { database, auth } from '../firebase';
import { ref, push, serverTimestamp, get, set } from 'firebase/database';
import Bottom from "../components/bottom";

const PasswordConfirmation = ({ route, navigation }) => {
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  
  const { totalAmount, transactionDate, merchantName } = route.params;

  const updateBalance = async (userId, amount) => {
    const balanceRef = ref(database, `users/${userId}/balance`);
    
    try {
      // Get current balance
      const balanceSnapshot = await get(balanceRef);
      const currentBalance = balanceSnapshot.val() || 0;
      
      // Calculate new balance 
      const newBalance = currentBalance - amount;
      
      //  if balance go negative
      if (newBalance < 0) {
        throw new Error('Insufficient balance');
      }
      
      // Update balance
      await set(balanceRef, newBalance);
      
      return newBalance;
    } catch (error) {
      throw error;
    }
  };

  const handleConfirmPassword = async () => {
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    try {
      //  user ID
      const userId = auth.currentUser?.uid;
      
      if (!userId) {
        Alert.alert('Error', 'User not authenticated');
        return;
      }

     
      try {
        await updateBalance(userId, totalAmount);
      } catch (error) {
        if (error.message === 'Insufficient balance') {
          Alert.alert('Error', 'Insufficient balance to complete this transaction');
          return;
        }
        throw error;
      }

      // reference to the user transactions
      const transactionsRef = ref(database, `users/${userId}/transactions`);

      // Create transaction object
      const transactionData = {
        merchantName,
        amount: totalAmount,
        transactionDate,
        timestamp: serverTimestamp(),
        status: 'completed',
        type: 'payment'
      };

      // Push the transaction data to Firebase
      await push(transactionsRef, transactionData);

      // Navigate to Payment screen on success
      navigation.navigate('Payment', {
        transactionData: {
          ...transactionData,
          timestamp: new Date().toISOString() 
        }
      });

    } catch (error) {
      console.error('Transaction error:', error);
      Alert.alert(
        'Error',
        'Failed to process transaction. Please try again.'
      );
      
      // If there was an error after balance update, try to reverse it
      if (error.balanceUpdated) {
        try {
          await updateBalance(userId, -totalAmount); // Add the amount back
        } catch (reverseError) {
          console.error('Failed to reverse balance update:', reverseError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Confirm Password"
        onBackPress={() => navigation.goBack()}
        
      />

      <View style={styles.contentContainer}>
        <Text style={styles.instructionText}>
          Please input your password before continuing payment
        </Text>

        <View style={styles.transactionDetails}>
          <Text style={styles.detailText}>Merchant: {merchantName}</Text>
          <Text style={styles.detailText}>Amount: {totalAmount} PKR</Text>
          <Text style={styles.detailText}>Date: {transactionDate}</Text>
        </View>

        <View style={styles.passwordContainer}>
          <InputBox
            label="Password"
            value={password}
            placeholder="Enter password"
            secureTextEntry={secureText}
            onChangeText={(text) => setPassword(text)}
          />
          
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton 
          title={loading ? "Processing..." : "Confirm Password"}
          onPress={handleConfirmPassword}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0B1E',
  },
  contentContainer: { 
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center', 
  },
  instructionText: {
    fontSize: 16,
    color: '#9A9A9A', 
    fontFamily: 'Lobster_400Regular',
    maxWidth: 300,
    marginBottom: 20,
  },
  transactionDetails: {
    backgroundColor: '#1A1831',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Lobster_400Regular',
    marginBottom: 5,
  },
  passwordContainer: {
    marginTop: 10,
  },
  passwordHint: {
    fontSize: 12,
    fontFamily: 'LilitaOne_400Regular',
    color: '#9A9A9A', 
    marginTop: 5,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40, 
  },
});

export default PasswordConfirmation;