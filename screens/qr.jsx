import { StyleSheet, Text, View, Image, Button, Alert, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import Header from '../components/headerwhite';
import BottomNavBar from '../components/bottom';
import ReusableButton from '../components/button';
import { ref, push, serverTimestamp } from 'firebase/database';
import { auth, database } from '../firebase';

export default function QR({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setIsLoading(true);
  
    try {
      Alert.alert('Processing', 'Please wait while we process your payment...');
  
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      const paymentData = {
        qrData: data,
        scanType: type,
        timestamp: new Date().toISOString(),
        status: 'processed',
        amount: Math.floor(Math.random() * 1000)
      };
  
      //  API call
      const response = await axios.post('https://httpbin.org/post', paymentData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // Get current user
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error('No user logged in');
        }

        // Create reference to user payments in Firebase
        const userPaymentsRef = ref(database, `users/${currentUser.uid}/payments`);
        
        // Prepare data for Firebase
        const firebasePaymentData = {
          ...paymentData,
          apiResponse: response.data,
          userId: currentUser.uid,
          serverTimestamp: serverTimestamp(), 
        };

        // Save to Firebase
        await push(userPaymentsRef, firebasePaymentData);

        Alert.alert(
          'Payment Successful!',
          `Amount: $${paymentData.amount}\n` +
          `QR Content: ${data}\n` +
          `Time: ${new Date().toLocaleTimeString()}`
        );
      } else {
        throw new Error('Payment processing failed');
      }
    } catch (error) {
      let errorMessage = 'There was an error processing your payment. Please try again.';
      
      
      if (error.message === 'No user logged in') {
        errorMessage = 'Please log in to process payments.';
      } else if (error.response) {
        errorMessage = `Payment failed: ${error.response.data.message || 'API Error'}`;
      } else if (error.code) {
        // Handle Firebase error
        errorMessage = `Database error: ${error.message}`;
      }

      Alert.alert(
        'Payment Failed',
        errorMessage,
        [{ text: 'OK', onPress: () => setScanned(false) }]
      );
      console.error('QR Scanning Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header 
        title="Scan To Pay" 
        onBackPress={() => navigation.goBack()}
       
      />

      <View style={styles.imageContainer}>
        {isScanning ? (
          <View style={styles.scannerContainer}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {isLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Processing Payment...</Text>
              </View>
            )}
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
              : 'Press Start Scanning to begin payment'}
          </Text>
          
          <ReusableButton
            title={isScanning 
              ? (scanned ? 'Scan Another Code' : 'Scanning...') 
              : 'Start Scanning'}
            onPress={() => {
              if (scanned) {
                setScanned(false);
              } else {
                setIsScanning(!isScanning);
              }
            }}
            disabled={isLoading}
          />
        </View>
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