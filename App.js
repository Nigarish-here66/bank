import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Login from './screens/login'


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
