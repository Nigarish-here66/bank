import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

// Importing all the screens used in the app
import Dashboard from './screens/Dashboard';
import TokenPopupScreen from './screens/TokenPopup';
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
import EditProfile from './screens/EditProfile';

// Creating the stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator 
        initialRouteName="Splash"  
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#fff' } 
        }}
      >
        {/* Defining all the screens in the navigation stack */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SetGoals" component={SetGoals} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="IncomeHistory" component={IncomeHistory} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="QR" component={QR} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="TokenPopup" component={TokenPopupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Basic style for the container used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',  
    alignItems: 'center',  
  },
});
