import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/headerblack';
import BottomNavBar from '../components/bottom';

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Reusable Header */}
      <Header
        title="My Account"
        onBackPress={() => navigation.goBack()}
        onHelpPress={() => alert('Help/Settings clicked')}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>MH</Text>
          </View>
          <Text style={styles.nameText}>Manahil Habib</Text>
          <Text style={styles.accountNumber}>298985151</Text>

          {/* Profile and Settings buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.profileButton}>
              <FontAwesome5 name="user" size={16} color="#000" />
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsButton}>
              <FontAwesome5 name="cog" size={16} color="#000" />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Dashboard')}>
            <FontAwesome5 name="th-list" size={20} color="#fff" />
            <Text style={styles.actionText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="comment-dots" size={20} color="#fff" />
            <Text style={styles.actionText}>Complaint</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="file-alt" size={20} color="#fff" />
            <Text style={styles.actionText}>Account Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="user-plus" size={20} color="#fff" />
            <Text style={styles.actionText}>Payee Management</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>SIKKA Version 3.31.2  Terms & Conditions</Text>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'white'
   },
  scrollView: { paddingHorizontal: 20 },
  profileCard: {
    backgroundColor: '#1C1B2A',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
    width: '100%',
  },
  circle: {
    backgroundColor: "#00CCAA",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: { fontSize: 24, color: '#FFF' },
  nameText: { fontSize: 24, color: '#FFF', marginTop: 10 },
  accountNumber: { fontSize: 18, color: '#B0B0B0', marginTop: 5 },
  buttonRow: { flexDirection: 'row', marginTop: 15 },
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
  buttonText: { fontSize: 14, color: '#000', marginLeft: 8 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  actionButton: {
    backgroundColor: '#1C1B2A',
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  actionText: { fontSize: 16, color: '#FFF', marginTop: 5 },
  footerText: { textAlign: 'center', color: '#9b9b9b', marginVertical: 20 },
});

export default Account;
