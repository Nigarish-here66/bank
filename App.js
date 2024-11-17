import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './screens/Dashboard';
import Notification from './screens/Notification';
import Statistics from './screens/Statistics';
import Scanner from './screens/Scanner';
import Splash from './screens/splash';
import SetGoals from './screens/SetGoal';
import CreateAccount from './screens/createAccount';
import Login from './screens/login';
import IncomeHistory from './screens/IncomeHistory';
import Home from './screens/home';
import Payment from './screens/payment';
import QR from './screens/qr';
import Password from "./screens/password";
import MyAccount from "./screens/Account";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#fff' }
};

const screens = [
  { name: "Splash", component: Splash },
  { name: "SetGoals", component: SetGoals },
  { name: "CreateAccount", component: CreateAccount },
  { name: "Login", component: Login },
  { name: "Dashboard", component: Dashboard },
  { name: "Notification", component: Notification },
  { name: "Statistics", component: Statistics },
  { name: "Scanner", component: Scanner },
  { name: "IncomeHistory", component: IncomeHistory },
  { name: "Home", component: Home },
  { name: "Payment", component: Payment },
  { name: "QR", component: QR },
  { name: "Password", component: Password },
  { name: "MyAccount", component: MyAccount }
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={screenOptions}
      >
        {screens.map((screen, index) => (
          <Stack.Screen key={index} name={screen.name} component={screen.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});