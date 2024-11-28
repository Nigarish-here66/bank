import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/headerblack'; 
import BottomNavBar from '../components/bottom'; 
import { auth, database } from '../firebase'; 
import { ref, onValue } from 'firebase/database';
import { signOut } from 'firebase/auth'; 
import { LinearGradient } from 'expo-linear-gradient';  

const Account = ({ navigation }) => {
  // State for storing user's name and account number
  const [userName, setUserName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  // Fetch user data from Firebase when the component mounts
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userRef = ref(database, `users/${currentUser.uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUserName(userData.name || 'User');
          setAccountNumber(userData.accountNumber || '298985151');
        }
      });
    }
  }, []);

  // Function to handle user sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace('Splash'); // Redirect to Splash screen after sign-out
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
    }
  };

  // Show a confirmation dialog before signing out
  const handleSignOutConfirmation = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Sign Out",
          onPress: handleSignOut,
          style: "destructive",
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../assets/image.png')}
      style={styles.container}
      imageStyle={{ opacity: 0.9 }}
    >
      {/* Reusable Header */}
      <Header
        title="My Account"
        onBackPress={() => navigation.goBack()} 
        onHelpPress={handleSignOutConfirmation} // Trigger sign-out confirmation
      />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Circle with Gradient */}
          <LinearGradient
            colors={['#7F00FF', '#E100FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.circleGradient}
          >
            <View style={styles.circle}>
              <Text style={styles.circleText}>
                {userName ? userName.substring(0, 2).toUpperCase() : '?'} {/* Display initials */}
              </Text>
            </View>
          </LinearGradient>
          <Text style={styles.nameText}>{userName}</Text>
          <Text style={styles.accountNumber}>{accountNumber}</Text>

          {/* Profile and Settings Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => navigation.navigate('EditProfile')} 
            >
              <FontAwesome5 name="user" size={16} color="#000" />
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => Alert.alert('Under Development')}
            >
              <FontAwesome5 name="cog" size={16} color="#000" />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: 'white' }]}
            onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
          >
            <FontAwesome5 name="th-list" size={20} color="red" />
            <Text style={styles.actionText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: 'white' }]}
            onPress={() => Alert.alert('Under Development')} // Placeholder for Complaint
          >
            <FontAwesome5 name="comment-dots" size={20} color="yellow" />
            <Text style={styles.actionText}>Complaint</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: 'white' }]}
            onPress={() => Alert.alert('Under Development')} // Placeholder for Account Statement
          >
            <FontAwesome5 name="file-alt" size={20} color="blue" />
            <Text style={styles.actionText}>Account Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: 'white' }]}
            onPress={() => Alert.alert('Under Development')} // Placeholder for Payee Management
          >
            <FontAwesome5 name="user-plus" size={20} color="green" />
            <Text style={styles.actionText}>Payee Management</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>SIKKA Version 3.31.2  Terms & Conditions</Text>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </ImageBackground>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  circleGradient: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  circleText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 24,
    color: '#000',
    marginTop: 10,
  },
  accountNumber: {
    fontSize: 18,
    color: '#B0B0B0',
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  actionButton: {
    backgroundColor: '#1C1B2A',
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    elevation: 5,
    color: 'black',
  },
  actionText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  footerText: {
    textAlign: 'center',
    color: '#9b9b9b',
    marginVertical: 20,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default Account;
