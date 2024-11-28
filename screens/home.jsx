import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Alert, BackHandler , ImageBackground} from 'react-native';
import Header from '../components/headerblack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Bottom from '../components/bottom';
import { signOut } from 'firebase/auth';
import { auth, database } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');


const Home = ({ navigation }) => {
  
  const [balance, setBalance] = useState(0);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  // Payment options displayed as grid items
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
    // Get current user data from Firebase Realtime Database
    const currentUser = auth.currentUser;

    if (currentUser) {
      // Reference to the user's data in the database
      const userRef = ref(database, `users/${currentUser.uid}`);

      // Set up real-time listener for user data
      const unsubscribe = onValue(
        userRef,
        (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setUserName(userData.name || ''); // Update user name
            setBalance(userData.balance || 0); // Update balance
          }
          setLoading(false); // Stop loading once data is fetched
        },
        (error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        }
      );

      // Hardware back button handler
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress
      );

      // Session end 
      return () => {
        unsubscribe();
        backHandler.remove();
      };
    }
  }, []);

  // Handles the hardware back button press
  const handleBackPress = () => {
    if (navigation.isFocused()) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit and signout?',
        [
          { text: 'No', style: 'cancel' },
          { text: 'Yes', onPress: handleSignOut },
        ]
      );
      return true;
    }
    return false;
  };

  // Logs out the user and navigates to the splash screen
  const handleSignOut = async () => {
    try {
      await signOut(auth); 
      navigation.replace('Splash'); 
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
    }
  };

  // Displays a confirmation dialog for signing out
  const handleSignOutConfirmation = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Out', onPress: handleSignOut, style: 'destructive' },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../assets/image.png')} 
      style={styles.container}
      imageStyle={{ opacity: 0.9 }}
    >
      {/* Custom Header */}
      <Header
        title="Home"
        onBackPress={() => navigation.goBack()} 
        onHelpPress={handleSignOutConfirmation} // Sign out confirmation
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        
        {/* Balance section */}
        <View style={styles.balanceContainer}>
          <Text style={styles.helloText}>Hello, {loading ? '...' : userName}</Text>
          <Text style={styles.balanceLabel}>Your available balance</Text>
          <Text style={styles.balanceAmount}>{loading ? '...' : `${balance} PKR`}</Text>

          {/* Action buttons: Transfer, Dashboard, History */}
          <View style={styles.actionButtonsContainer}>
            {[
              { label: 'Transfer', icon: 'exchange-alt', route: 'Scanner' },
              { label: 'Dashboard', icon: 'wallet', route: 'Dashboard' },
              { label: 'History', icon: 'history', route: 'IncomeHistory' },
            ].map((item, index) => (
              <LinearGradient
                key={index}
                colors={['#7F00FF', '#E100FF']}
                style={styles.actionButtonGradient}
              >
                <TouchableOpacity
                  style={styles.actionButtonContent}
                  onPress={() => navigation.navigate(item.route)}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name={item.icon} size={20} color="#FFFFFF" />
                  <Text style={styles.actionButtonText}>{item.label}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
          </View>
        </View>

        {/* Payment options */}
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

        {/* Promotions */}
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

      {/* Bottom Navigation */}
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
    // backgroundColor: '#0D0B1E',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
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
    color: 'black',
    marginTop: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  actionButtonGradient: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  actionButtonContent: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  promoDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
});

export default Home;