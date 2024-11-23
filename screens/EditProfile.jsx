import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  ScrollView, TextInput, TouchableOpacity,Alert,ActivityIndicator,  ImageBackground  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { auth, database } from '../firebase';
import { ref, onValue, update } from 'firebase/database';
import Header from '../components/headerblack';

const EditProfile = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    balance: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userRef = ref(database, `users/${currentUser.uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData({
            name: data.name || '',
            phoneNumber: data.phoneNumber || '',
            balance: data.balance ? data.balance.toString() : '0'
          });
        }
        setIsLoading(false);
      });
    }
  };

  const handleSave = async () => {
    if (!userData.name.trim()) {
      Alert.alert('Error', 'Name cannot be empty');
      return;
    }

    try {
      setIsSaving(true);
      const currentUser = auth.currentUser;
      const userRef = ref(database, `users/${currentUser.uid}`);
      
      await update(userRef, {
        name: userData.name.trim(),
        phoneNumber: userData.phoneNumber.trim(),
        balance: parseFloat(userData.balance) || 0
      });

      Alert.alert('Success', 'Profile updated successfully', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00CCAA" />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/image.png')} style={styles.container} imageStyle={{
      opacity: 0.9, 
           }}>
      <Header
        title="Edit Profile"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileCard}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>
              {userData.name ? userData.name.substring(0, 2).toUpperCase() : 'U'}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="user" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.name}
                onChangeText={(text) => setUserData({ ...userData, name: text })}
                placeholder="Enter your name"
                placeholderTextColor="#B0B0B0"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="phone" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.phoneNumber}
                onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
                placeholder="Enter phone number"
                placeholderTextColor="#B0B0B0"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Balance</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome5 name="dollar-sign" size={16} color="#B0B0B0" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={userData.balance}
                onChangeText={(text) => setUserData({ ...userData, balance: text })}
                placeholder="Enter balance"
                placeholderTextColor="#B0B0B0"
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <>
                <FontAwesome5 name="save" size={16} color="#FFF" />
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </>
            )}
          </TouchableOpacity>
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
    backgroundColor: '#1C1B2A',
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
  circle: {
    backgroundColor: "#00CCAA",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#00CCAA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EditProfile;