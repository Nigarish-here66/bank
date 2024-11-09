import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Header from '../components/header';
import LongButton from '../components/longbutton';


export default function Payment() {
  return (
    <View style={styles.Outercontainer}>
      <Header title="Payment Receipt" onBackPress={() => alert('Back clicked')} onHelpPress={() => alert('Help/Settings clicked')} />

      <View style={styles.Innercontainer}>

        <View style={styles.img}><Image source={require('../assets/confirmed.png')} style={{ width: 100, height: 100 }} /></View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Payment Success</Text>
        <Text style={styles.description}>Your payment for Starbucks Coffee has been successfully done</Text>
        
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Total Payment</Text>
        <Text>$132.00</Text>

        <Text>Payment for</Text>

        <View style={styles.card}>
          <Image source={require('../assets/Starbucks.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
          <View style={styles.txt}>
            <Text>Starbucks Coffee</Text>
            <Text>Dec 2, 2020 . 3:02 PM</Text>
            </View> 
        </View>

        <LongButton title="Done" onPress={() => alert('Payment Done')} />

        <TouchableOpacity onPress={() => alert('')} style={styles.payAgainButton}>
          <Text style={styles.payAgainText}>Pay Again</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  Outercontainer: {
    flex: 1,
    backgroundColor: '#0D0B1E',
  },

  Innercontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  description: {
    fontSize: 16,
    color: '#Black',
    marginBottom: 20,
    marginVertical: 10,
    textAlign: 'center',
  },

  card: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  
  
  },

  txt: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 50,
    
  
  },
  payAgainButton: {
    
  },

  payAgainText: {
    color: '#007E57',
    fontSize: 16,
  },
 
  img: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});