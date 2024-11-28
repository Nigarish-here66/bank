
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity ,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Bottom from '../components/bottom';
import Header from '../components/headerblack'; 

const Notification = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/image.png')} style={styles.container} imageStyle={{ opacity: 0.9 }}>
      
      {/* Header Component */}
      <Header
        title="Notifications" 
        onBackPress={() => navigation.goBack()} 
      /> 

      {/* Scrollable Notifications Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Today's Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TODAY</Text> 
          <Text style={styles.markAsRead}>Mark as read</Text> 
          <View style={styles.notificationCard}>

            {/* Notification Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="gift-outline" size={24} color="white" />
            </View>

            {/* Notification Text Content */}
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>Cashback 50%</Text> 
              <Text style={styles.notificationDescription}>Get 50% cashback for the next top up</Text> 
              <TouchableOpacity>

                {/* Link to top-up action */}
                <Text style={styles.topUpLink}>Top up now &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Yesterday's Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YESTERDAY</Text> 
          {notifications.yesterday.map((notification, index) => (

            // Map through the yesterday's notifications and display each one
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

        {/* Last 7 Days Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LAST 7 DAYS</Text> 
          {notifications.last7Days.map((notification, index) => (

            // Map through the last 7 days' notifications and display each one
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

      {/* Bottom Navigation Component */}
      <Bottom />
    </ImageBackground>
  );
};

// Sample notifications data
const notifications = {
  yesterday: [
    { icon: "💰", title: "Received $50", time: "2:30 PM", tag: "Finance" },
    { icon: "📈", title: "Stock Alert: +3%", time: "11:00 AM", tag: "Stocks" },
    { icon: "🎉", title: "Bonus Unlocked!", time: "9:15 AM", tag: "Rewards" },
    { icon: "📩", title: "New Message", time: "7:45 AM", tag: "Inbox" },
    { icon: "🔔", title: "Daily Reminder", time: "7:00 AM", tag: "Reminder" },
    { icon: "🛒", title: "Order Delivered", time: "6:00 AM", tag: "Shopping" },
    { icon: "🏦", title: "Bank Statement", time: "5:00 AM", tag: "Banking" },
    { icon: "🌟", title: "New Achievement", time: "4:00 AM", tag: "Achievements" },
  ],
  last7Days: [
    { icon: "🔔", title: "Event Reminder", time: "Tuesday, 3:45 PM", tag: "Events" },
    { icon: "🛍️", title: "Shopping Discount", time: "Monday, 2:30 PM", tag: "Shopping" },
    { icon: "📅", title: "Meeting Scheduled", time: "Sunday, 1:15 PM", tag: "Work" },
    { icon: "🚗", title: "Car Service Due", time: "Saturday, 12:00 PM", tag: "Reminders" },
    { icon: "🎶", title: "Playlist Updated", time: "Friday, 11:30 AM", tag: "Music" },
    { icon: "📞", title: "Missed Call", time: "Thursday, 10:15 AM", tag: "Calls" },
    { icon: "📤", title: "Email Sent", time: "Wednesday, 9:00 AM", tag: "Work" },
    { icon: "📕", title: "Reading Completed", time: "Tuesday, 8:00 AM", tag: "Learning" },
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
