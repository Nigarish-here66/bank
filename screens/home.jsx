import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Alert, BackHandler , ImageBackground} from 'react-native';
import Header from '../components/headerblack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Bottom from '../components/bottom';
import { signOut } from 'firebase/auth';
import { auth, database } from '../firebase';
import { ref, onValue } from 'firebase/database';

const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  const [paymentOptions, setPaymentOptions] = useState([
    [
      { label: 'Electricity', icon: 'bolt', color: '#8B8000' },
      { label: 'Internet', icon: 'wifi', color: 'orange' },
      { label: 'Voucher', icon: 'ticket-alt', color: 'green' },
      { label: 'Assurance', icon: 'briefcase-medical', color: 'red' },
    ],
    [
      { label: 'Gas', icon: 'fire', color: 'red' },
      { label: 'Water', icon: 'tint', color: 'blue' },
      { label: 'Cable', icon: 'tv', color: 'purple' },
      { label: 'Taxes', icon: 'receipt', color: 'yellow' },
    ],
    [
      { label: 'Merchant', icon: 'store', color: 'green' },
      { label: 'Mobile Credit', icon: 'mobile-alt', color: 'blue' },
      { label: 'Bill', icon: 'file-invoice', color: 'orange' },
      { label: 'More', icon: 'ellipsis-h', color: 'green' },
    ],
  ]);

  useEffect(() => {
    // Get current user data
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      // Reference to the user's data in the database
      const userRef = ref(database, `users/${currentUser.uid}`);
      
      // Set up real-time listener for user data
      const unsubscribe = onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          setUserName(userData.name || '');
          setBalance(userData.balance || 0);
        }
        setLoading(false);
      }, (error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });

      // Hardware back button handler
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress
      );

      // Cleanup function
      return () => {
        unsubscribe(); // Remove database listener
        backHandler.remove(); // Remove back button handler
      };
    }
  }, []);

  const handleBackPress = () => {
    if (navigation.isFocused()) {
      Alert.alert(
        "Exit App",
        "Are you sure you want to exit and signout?",
        [
          {
            text: "No",
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: handleSignOut,
          }
        ]
      );
      return true;
    }
    return false;
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace('Splash');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
    }
  };

  const handleSignOutConfirmation = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Sign Out",
          onPress: handleSignOut,
          style: "destructive"
        }
      ]
    );
  };

  return (
    <ImageBackground source={require('../assets/image.png')} style={styles.container} imageStyle={{
      opacity: 0.9, 
           }}>
      
      <Header
        title="Home"
        onBackPress={() => navigation.goBack()}
        onHelpPress={handleSignOutConfirmation}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.balanceContainer}>
          <Text style={styles.helloText}>
            Hello, {loading ? '...' : userName}
          </Text>
          <Text style={styles.balanceLabel}>Your available balance</Text>
          <Text style={styles.balanceAmount}>
            {loading ? '...' : `${balance} PKR`}
          </Text>

          <View style={styles.actionButtonsContainer}>
            {[
              { label: 'Transfer', icon: 'exchange-alt', route: 'Scanner' },
              { label: 'Dashboard', icon: 'wallet', route: 'Dashboard' },
              { label: 'History', icon: 'history', route: 'IncomeHistory' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.actionButton}
                onPress={() => navigation.navigate(item.route)}
              >
                <FontAwesome5 name={item.icon} size={20} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

       
        <View style={styles.paymentListContainer}>
          <Text style={styles.sectionTitle}>Payment List</Text>

          {paymentOptions.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.iconRow}>
              {row.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.paymentOption}
                  onPress={() => alert(`${option.label} clicked`)}
                >
                  <FontAwesome5 name={option.icon} size={24} color={option.color} />
                  <Text style={styles.paymentLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.promoContainer}>
          <Text style={styles.promoTitle}>Promo & Discount</Text>
          <TouchableOpacity onPress={() => alert('See More Pressed')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
          <View style={styles.promoCard}>
            <Text style={styles.promoText}>30% OFF Black Friday Deal</Text>
            <Text style={styles.promoDescription}>
              Get discounts for every payment you make this week.
            </Text>
          </View>
        </View>
      </ScrollView>

      <Bottom />
    </ImageBackground>
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
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#C4C4C4',
    marginTop: 5,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#00CCAA',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  paymentListContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
    color: '#333333',
    marginTop: 15,
  },
  promoContainer: {
    marginTop: 30,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  seeMoreText: {
    fontSize: 14,
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
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  promoDescription: {
    fontSize: 14,
    color: '#D1F8E9',
    marginTop: 10,
  },
});

export default Home;