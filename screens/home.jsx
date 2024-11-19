import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/headerblack'; 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import Bottom from '../components/bottom';
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Reusable Header */}
      <Header
        title="Home" 
        onBackPress={() => navigation.goBack()}
        onHelpPress={() => alert('Help/Settings clicked')}
      />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.balanceContainer}>
          {/* Wpay Icon */}
         
          {/* User Info */}
          <Text style={styles.helloText}>Hello Andre,</Text>
          <Text style={styles.balanceLabel}>Your available balance</Text>
          <Text style={styles.balanceAmount}>$15,901</Text>

          {/* Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton} 
              onPress={() => navigation.navigate('Scanner')}>
              <FontAwesome5 name="exchange-alt" size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}
            onPress={() => navigation.navigate('Dashboard')}>
              <FontAwesome5 name="wallet" size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>Dashboard</Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}
                onPress={() => navigation.navigate('IncomeHistory')}>
              <FontAwesome5 name="history" size={20} color="#FFFFFF" />
              <Text style={styles.actionButtonText}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment List */}
        <View style={styles.paymentListContainer}>
          <Text style={styles.sectionTitle}>Payment List</Text>

          {/* First Row */}
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.paymentOption} 
            onPress={() => alert('Electricty clicked')}
            >
              <FontAwesome5 name="bolt" size={24} color="#8B8000" />
              <Text style={styles.paymentLabel}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption}
            onPress={() => alert('Internet clicked')}
            >
              <FontAwesome5 name="wifi" size={24} color="orange" />
              <Text style={styles.paymentLabel}>Internet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption} 
            onPress={() => alert('Voucher clicked')}
            >
              <FontAwesome5 name="ticket-alt" size={24} color="green" />
              <Text style={styles.paymentLabel}>Voucher</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption} onPress={() => alert('Assurance clicked')}>
              <FontAwesome5 name="briefcase-medical" size={24} color="red" />
              <Text style={styles.paymentLabel}>Assurance</Text>
            </TouchableOpacity>
          </View>
{/* Second Row */}
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.paymentOption} onPress={() => alert('Merchant clicked')}>
              <FontAwesome5 name="store" size={24} color="green" />
              <Text style={styles.paymentLabel}>Merchant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption} onPress={() => alert('Mobile credit clicked')}>
              <FontAwesome5 name="mobile-alt" size={24} color="blue" />
              <Text style={styles.paymentLabel}>Mobile Credit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption} onPress={() => alert('Bill clicked')}>
              <FontAwesome5 name="file-invoice" size={24} color="orange" />
              <Text style={styles.paymentLabel}>Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentOption} onPress={() => alert('More clicked')}>
              <FontAwesome5 name="ellipsis-h" size={24} color="green" />
              <Text style={styles.paymentLabel}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo & Discount */}
        <View style={styles.promoContainer}>
          <Text style={styles.promoTitle}>Promo & Discount</Text>
          <TouchableOpacity onPress={() => alert('See More Pressed')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <View style={styles.promoCard}>
            <Text style={styles.promoText}>30% OFF Black Friday deal</Text>
            <Text style={styles.promoDescription}>
              Get discount for every payment you make this week.
            </Text>
          </View>
        </View>
      </ScrollView>

      <Bottom />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    padding: 20,
  },
  balanceContainer: {
    backgroundColor: '#0D0B1E',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  wpayLogo: {
    width: 50,
    height: 30,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  helloText: {
    fontSize: 20,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF',
    marginTop: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#C4C4C4',
    fontFamily: 'Lobster_400Regular',
    marginTop: 5,
  },
  balanceAmount: {
    fontSize: 32,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF',
    marginTop: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#00CCAA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'LilitaOne_400Regular',
    marginTop: 5,
  },
  paymentListContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'LilitaOne_400Regular',
    color: '#333333',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  paymentOption: {
    width: width / 4 - 20,
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 14,
    fontFamily: 'Lobster_400Regular',
    color: '#333333',
    marginTop: 5,
  },
  promoContainer: {
    marginTop: 30,
  },
  promoTitle: {
    fontSize: 18,
    fontFamily: 'LilitaOne_400Regular',
    color: 'black',
  },
  seeMoreText: {
    fontSize: 14,
    fontFamily: 'LilitaOne_400Regular',
    color: '#00CCAA',
    position: 'absolute',
    right: 0,
    top: -20,
  },
  promoCard: {
    backgroundColor: '#0D0B1E',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  promoText: {
    fontSize: 18,
    fontFamily: 'LilitaOne_400Regular',
    color: '#FFFFFF',
  },
  promoDescription: {
    fontSize: 14,
    fontFamily: 'Lobster_400Regular',
    color: '#D1F8E9',
    marginTop: 10,
  },
 
});

export default Home;
