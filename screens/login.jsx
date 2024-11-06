import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View >
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
