import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  ScrollView, TextInput, TouchableOpacity,Alert,ActivityIndicator,  ImageBackground  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { auth, database } from '../firebase';
import { ref, onValue, update } from 'firebase/database';
import Header from '../components/headerblack';
import { LinearGradient } from 'expo-linear-gradient';


const EditProfile = ({ navigation }) => {
  // State to store user data, including name, phone number, and balance
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    balance: ''
  });
  const [isLoading, setIsLoading] = useState(true); 
  const [isSaving, setIsSaving] = useState(false); 

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Fetch user data from Firebase Realtime Database
  const fetchUserData = async () => {
    const currentUser = auth.currentUser; // Get the currently authenticated user
    if (currentUser) {
      const userRef = ref(database, `users/${currentUser.uid}`); // Reference to user's data in the database
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val(); // Retrieve user data
          setUserData({
            name: data.name || '', // Default to an empty string if no data exists
            phoneNumber: data.phoneNumber || '',
            balance: data.balance ? data.balance.toString() : '0'
          });
        }
        setIsLoading(false); // Stop loading once data is retrieved
      });
    }
  };

  // Handle saving updated user profile data
  const handleSave = async () => {
    if (!userData.name.trim()) {
      Alert.alert('Error', 'Name cannot be empty'); // Alert if the name field is empty
      return;
    }

    try {
      setIsSaving(true); 
      const currentUser = auth.currentUser; // Get the currently authenticated user
      const userRef = ref(database, `users/${currentUser.uid}`); // Reference to user's data in the database
      
      await update(userRef, {
        name: userData.name.trim(), // Trimmed name
        phoneNumber: userData.phoneNumber.trim(), // Trimmed phone number
        balance: parseFloat(userData.balance) || 0 // Parse balance as a number, default to 0
      });

      // Alert the user on successful update
      Alert.alert('Success', 'Profile updated successfully', [
        { text: 'OK', onPress: () => navigation.goBack() } 
      ]);
    } catch (error) {
      // Alert the user if an error occurs during the save operation
      Alert.alert('Error', 'Failed to update profile');
      console.error(error); 
    } finally {
      setIsSaving(false); 
    }
  };

  // Show a loading spinner if data is still being fetched
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00CCAA" />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('../assets/image.png')} 
      style={styles.container} 
      imageStyle={{ opacity: 0.9 }} 
    >
      {/* Header component with a back button */}
      <Header
        title="Edit Profile"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileCard}>

          {/* User profile initials displayed in a circular gradient */}
          <LinearGradient
            colors={['#7F00FF', '#E100FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.circleGradient}
          >
            <View style={styles.circle}>
              <Text style={styles.circleText}>
                {userData.name ? userData.name.substring(0, 2).toUpperCase() : 'U'} 
              </Text>
            </View>
          </LinearGradient>

          {/* Input field for Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="user" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.name} 
                onChangeText={(text) => setUserData({ ...userData, name: text })} // Update name in state
                placeholder="Enter your name"
                placeholderTextColor="#B0B0B0"
              />
            </View>
          </View>

          {/* Input field for Phone Number */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="phone" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.phoneNumber} 
                onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })} // Update phone number in state
                placeholder="Enter phone number"
                placeholderTextColor="#B0B0B0"
                keyboardType="phone-pad" // Use numeric keypad
              />
            </View>
          </View>

          {/* Input field for Balance */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Balance</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="dollar-sign" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.balance} 
                onChangeText={(text) => setUserData({ ...userData, balance: text })} // Update balance in state
                placeholder="Enter balance"
                placeholderTextColor="#B0B0B0"
                keyboardType="numeric" // Use numeric keypad
              />
            </View>
          </View>

          {/* Save button with gradient styling */}
          <LinearGradient
            colors={['#7F00FF', '#E100FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.saveButtonGradient}
          >
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={handleSave} 
              disabled={isSaving} // Disable button while saving
            >
              {isSaving ? (
                <ActivityIndicator color="#FFF" /> // Show spinner during save operation
              ) : (
                <>
                  <FontAwesome5 name="save" size={16} color="#FFF" style={styles.saveIcon} />
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
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
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    
    
  },
  saveButtonGradient: {
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  saveButton: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  saveIcon: {
    marginRight: 10,
  },
  
});

export default EditProfile;