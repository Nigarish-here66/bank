
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CustomButton from '../components/button'; 
import Header from '../components/headerwhite';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import Bottom from "../components/bottom";
const { width, height } = Dimensions.get('window');

const SummaryTransaction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Reusable Header */}
      <Header
        title="Summary Transaction"
        onBackPress={() => navigation.goBack()}
        onHelpPress={() => alert('Help/Settings clicked')}
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Starbucks Logo */}
        <Image
          source={require('../assets/starbuck.png')} 
          style={styles.logo}
        />

        {/* Transaction Details */}
        <Text style={styles.merchantName}>Starbucks Coffee</Text>
        <Text style={styles.transactionDate}>Payment on Dec 2, 2020</Text>

        {/* Transaction Amount */}
        <Text style={styles.amount}>$15.00</Text>

        {/* Payment Fee */}
        <View style={styles.paymentFeeContainer}>
          <Text style={styles.paymentFeeText}>Payment fee $2 has been applied</Text>
        </View>
      </View>

      {/* White Box at Bottom */}
      <View style={styles.bottomContainer}>
        {/* Card Selection Section */}
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

        {/* Proceed to Pay Button */}
        <View style={styles.buttonContainer}>
          <CustomButton title="Proceed to Pay" onPress={() => navigation.navigate('Password')} />
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
    marginTop: 80,
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
    marginBottom: 30,
  },
});

export default SummaryTransaction;
