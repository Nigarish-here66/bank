import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import SetGoal from './screens/SetGoal';




const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SetGoal/>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
