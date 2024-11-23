import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions , ScrollView } from 'react-native';
import CustomButton from '../components/longbutton'; 
import Header from '../components/headerwhite';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import Bottom from "../components/bottom";
const { width, height } = Dimensions.get('window');

const SummaryTransaction = ({ navigation }) => {
  // Constants for transaction details
  const baseAmount = 15.00;
  const feeAmount = 2.00;
  const totalAmount = baseAmount + feeAmount;
  const transactionDate = "Dec 2, 2020";
  const merchantName = "Starbucks Coffee";

  const handleProceedToPayment = () => {
    navigation.navigate('Password', {
      totalAmount: totalAmount,
      transactionDate: transactionDate,
      merchantName: merchantName
    });
  };

  return (
    <View  style={styles.container} >
      <Header
        title="Summary Transaction"
        onBackPress={() => navigation.goBack()}
       
      />

      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/starbuck.png')} 
          style={styles.logo}
        />

        <Text style={styles.merchantName}>{merchantName}</Text>
        <Text style={styles.transactionDate}>Payment on {transactionDate}</Text>

        <Text style={styles.amount}>{baseAmount.toFixed(2)} PKR</Text>

        <View style={styles.paymentFeeContainer}>
          <Text style={styles.paymentFeeText}>Payment fee {feeAmount} PKR has been applied</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Amount: {totalAmount.toFixed(2)} PKR</Text>
        </View>
      </View>

      <View style={styles.Container}>
        <View style={styles.bottomContainer}>
          <View style={styles.cardSelectionContainer}>
            <Text style={styles.chooseCardText}>Choose Cards</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Image
                  source={require('../assets/sikka.png')} 
                  style={styles.cardImage}
                />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardName}>Wally Virtual Card</Text>
                  <Text style={styles.cardNumber}>0318-1608-2105</Text>
                </View>
                <FontAwesome5 name="chevron-down" size={24} color="#000" style={styles.cardIcon} />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton 
              title="Proceed to Pay" 
              onPress={handleProceedToPayment} 
            />
          </View>
        </View>
        <Bottom />
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
    alignItems: 'center',
    paddingHorizontal: 20,
    
    
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  merchantName: {
    fontSize: 20,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF',
    marginTop: 15,
  },
  transactionDate: {
    fontSize: 14,
    fontFamily: 'Lobster_400Regular',
    color: '#C4C4C4',
    marginTop: 5,
  },
  amount: {
    fontSize: 36,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF',
    marginTop: 20,
  },
  paymentFeeContainer: {
    backgroundColor: '#0B5840',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    
  },
  paymentFeeText: {
    color: '#D1F8E9',
    fontSize: 14,
    fontFamily: 'Lobster_400Regular',
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: width,
    
  },

  Container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
   
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  cardSelectionContainer: {
    marginTop: 10,
  },
  chooseCardText: {
    fontSize: 18,
    fontFamily: 'LilitaOne_400Regular',
    color: '#000',
    marginBottom: 10,
  },
  cardContainer: {
    borderRadius: 15,
    backgroundColor: '#F4F4F4',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: 50,
    height: 30,
  },
  cardDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cardName: {
    fontSize: 18,
    fontFamily: 'LilitaOne_400Regular',
    color: '#000000',
  },
  cardNumber: {
    fontSize: 14,
    fontFamily: 'LilitaOne_400Regular',
    color: '#9A9A9A',
  },
  cardIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
   
  },
  totalContainer: {
    backgroundColor: '#0B5840',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    width: '100%',
  },
  totalText: {
    color: '#D1F8E9',
    fontSize: 16,
    fontFamily: 'LilitaOne_400Regular',
    textAlign: 'center',
  },
});

export default SummaryTransaction;
