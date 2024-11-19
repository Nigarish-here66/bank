
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Bottom from '../components/bottom';
import Header from '../components/headerblack';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Notifications"
        onBackPress={() => navigation.goBack()}
        onHelpPress={() => alert('Help/Settings clicked')}
      /> 

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
          {notifications.yesterday.map((notification, index) => (
            <View key={index} style={styles.notificationItem}>
              <View style={styles.iconYellow}>
                <Text style={styles.iconText}>{notification.icon}</Text>
              </View>
              <View style={styles.notificationText}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.timeText}>{notification.time}</Text>
              </View>
              <Text style={styles.tag}>{notification.tag}</Text>
            </View>
          ))}
        </View>

        {/* Last 7 Days Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LAST 7 DAYS</Text>
          {notifications.last7Days.map((notification, index) => (
            <View key={index} style={styles.notificationItem}>
              <View style={styles.iconOrange}>
                <Text style={styles.iconText}>{notification.icon}</Text>
              </View>
              <View style={styles.notificationText}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.timeText}>{notification.time}</Text>
              </View>
              <Text style={styles.tag}>{notification.tag}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
};

const notifications = {
  yesterday: [
    { icon: '💸', title: 'Daily Cashback', time: '8:00 AM', tag: 'Promo' },
    { icon: 'BLCK10', title: 'Use BLCK10 Promo Code', time: '3:40 PM', tag: 'Promo' },
  ],
  last7Days: [
    { icon: 'NOV10', title: 'Use NOV10 Promo Code', time: '3:40 PM', tag: 'Promo' },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingTop: 10,
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
    color:'#00CCAA',
    position: 'absolute',
    right: 16,
    marginTop: 5,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 7,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#00CCAA',
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
    color: '#00CCAA',
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
    backgroundColor:'#00CCAA',
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
    color:'#00CCAA',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 12,
  },
});

export default Notification;
