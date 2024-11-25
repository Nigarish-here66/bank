import { StyleSheet, Text, View, Image, Button, Alert, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import Header from '../components/headerwhite';
import BottomNavBar from '../components/bottom';
import ReusableButton from '../components/button';
import { ref, push, serverTimestamp } from 'firebase/database';
import { auth, database } from '../firebase';

export default function QR({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null); 
  const [scanned, setScanned] = useState(false); 
  const [isScanning, setIsScanning] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  // Request camera permissions on component mount
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted'); // Update state based on permission status
    };

    getBarCodeScannerPermissions(); // Run the permission request function
  }, []);

  // Handle QR code scan results
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true); 
    setIsLoading(true); 

    try {
      // Show an alert indicating that payment is being processed
      Alert.alert('Processing', 'Please wait while we process your payment...');

      // Simulate processing delay (e.g., waiting for a payment API to process)
      await new Promise(resolve => setTimeout(resolve, 1500));

      const paymentData = {
        qrData: data, // QR data from the scan
        scanType: type, // Type of barcode scanned 
        timestamp: new Date().toISOString(), // Current timestamp
        status: 'processed', // Status of the payment
        amount: Math.floor(Math.random() * 1000) // Random amount for demo purposes
      };

      // Simulate API call to process the payment (POST request)
      const response = await axios.post('https://httpbin.org/post', paymentData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // If the payment API responds successfully, proceed to save data in Firebase
        const currentUser = auth.currentUser; 
        if (!currentUser) {
          throw new Error('No user logged in'); 
        }

        // Reference to Firebase payments data for the current user
        const userPaymentsRef = ref(database, `users/${currentUser.uid}/payments`);

        // Prepare Firebase payment data, including API response and user information
        const firebasePaymentData = {
          ...paymentData,
          apiResponse: response.data, // Include the API response in the Firebase data
          userId: currentUser.uid, // Store the user ID
          serverTimestamp: serverTimestamp(), // Firebase timestamp for when the payment was logged
        };

        // Save payment data to Firebase
        await push(userPaymentsRef, firebasePaymentData);

        // Show success alert with payment details
        Alert.alert(
          'Payment Successful!',
          `Amount: ${paymentData.amount}PKR\n` +
          `QR Content: ${data}\n` +
          `Time: ${new Date().toLocaleTimeString()}`
        );
      } else {
        throw new Error('Payment processing failed');
      }
    } catch (error) {

      // Error handling and showing alerts based on different errors
      let errorMessage = 'There was an error processing your payment. Please try again.';

      if (error.message === 'No user logged in') {
        errorMessage = 'Please log in to process payments.'; // Specific error message for logged-out users
      } else if (error.response) {
        errorMessage = `Payment failed: ${error.response.data.message || 'API Error'}`; // API failure
      } else if (error.code) {
        errorMessage = `Database error: ${error.message}`; // Firebase error
      } 
      
      // Show the error message in an alert
      Alert.alert(
        'Payment Failed',
        errorMessage,
        [{ text: 'OK', onPress: () => setScanned(false) }] // Reset scanning status on failure
      );
      console.error('QR Scanning Error:', error); // Log the error for debugging
    } finally {
      setIsLoading(false); 
    }
  };

  // Handle cases where camera permission is still loading
  if (hasPermission === null) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  // Handle cases where camera permission is denied
  if (hasPermission === false) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* Header with a back button */}
      <Header 
        title="Scan To Pay" 
        onBackPress={() => navigation.goBack()} 
      />

      <View style={styles.imageContainer}>
        {isScanning ? (

          // QR Code scanner when scanning is active
          <View style={styles.scannerContainer}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} // Disable scanning if already scanned
              style={StyleSheet.absoluteFillObject} 
            />
            {isLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#ffffff" /> 
                <Text style={styles.loadingText}>Processing Payment...</Text>
              </View>
            )}
            {/* Scan frame (visual cue for the scanning area) */}
            <View style={styles.scanFrame} />
          </View>
        ) : (
          <Image source={require('../assets/scan.png')} style={styles.image} />
        )}
      </View>

      <View style={styles.Content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>Payment with QR Code</Text> 
          <Text style={styles.description}>
            {isScanning 
              ? 'Hold the QR code inside the frame to scan' 
              : 'Press Start Scanning to begin payment'} {/* Instructions when not scanning */}
          </Text>
          
          {/* Button to toggle scanning */}
          <ReusableButton
            title={isScanning 
              ? (scanned ? 'Scan Another Code' : 'Scanning...') // Button text based on scanning state
              : 'Start Scanning'}
            onPress={() => {
              if (scanned) {
                setScanned(false);
              } else {
                setIsScanning(!isScanning); // Toggle scanning state
              }
            }}
            disabled={isLoading} 
          />
        </View>
        
        {/* Bottom navigation bar */}
        <BottomNavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0B1E',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0B1E',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scannerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 16,
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#00ff00',
    backgroundColor: 'transparent',
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  textContent: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Content: {
    marginTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'LilitaOne_400Regular',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Lobster_400Regular',
    color: '#666',
    marginBottom: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});