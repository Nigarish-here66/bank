import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Notification = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Today Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TODAY</Text>
          <Text style={styles.markAsRead}>Mark as read</Text>
          <View style={styles.notificationCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="gift-outline" size={24} color="white" />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>Cashback 50%</Text>
              <Text style={styles.notificationDescription}>Get 50% cashback for the next top up</Text>
              <TouchableOpacity>
                <Text style={styles.topUpLink}>Top up now &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Yesterday Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YESTERDAY</Text>
          <View style={styles.notificationItem}>
            <View style={styles.iconYellow}>
              <Text style={styles.iconText}>💸</Text>
            </View>
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>Daily Cashback</Text>
              <Text style={styles.timeText}>8:00 AM</Text>
            </View>
            <Text style={styles.tag}>Promo</Text>
          </View>
          <View style={styles.notificationItem}>
            <View style={styles.iconBlue}>
              <Text style={styles.iconText}>BLCK10</Text>
            </View>
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>Use BLCK10 Promo Code</Text>
              <Text style={styles.timeText}>3:40 PM</Text>
            </View>
            <Text style={styles.tag}>Promo</Text>
          </View>
          {/* Add more notification items as needed */}
        </View>

        {/* Last 7 Days Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LAST 7 DAY</Text>
          <View style={styles.notificationItem}>
            <View style={styles.iconOrange}>
              <Text style={styles.iconText}>NOV10</Text>
            </View>
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>Use NOV10 Promo Code</Text>
              <Text style={styles.timeText}>3:40 PM</Text>
            </View>
            <Text style={styles.tag}>Promo</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  markAsRead: {
    fontSize: 14,
    color: '#007AFF',
    position: 'absolute',
    right: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#00BCD4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationTextContainer: {
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
  },
  topUpLink: {
    fontSize: 14,
    color: '#007AFF',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconYellow: {
    width: 40,
    height: 40,
    backgroundColor: '#FFEB3B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBlue: {
    width: 40,
    height: 40,
    backgroundColor: '#00BCD4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOrange: {
    width: 40,
    height: 40,
    backgroundColor: '#FF9800',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationText: {
    marginLeft: 10,
    flex: 1,
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  tag: {
    backgroundColor: '#E0F7FA',
    color: '#007AFF',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
  },
});

export default Notification;