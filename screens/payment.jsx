import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Header from '../components/headerwhite';
import LongButton from '../components/longbutton';
import Bottom from '../components/bottom'

export default function Payment({navigation}) {
  return (
    <View style={styles.Outercontainer}>
      <Header title="Payment Receipt" 
      onBackPress={() => navigation.goBack()}
      onHelpPress={() => alert('Help/Settings clicked')}
      />

      <View style={styles.Innercontainer}>

        <View style={styles.img}><Image source={require('../assets/confirmed.png')} style={{ width: 100, height: 100 }} /></View>
        <Text style={styles.head}>Payment Success</Text>
        <Text style={styles.description}>Your payment for Starbucks Coffee has been successfully done</Text>
        
        <Text style={styles.head}>Total Payment</Text>
        <Text style={styles.cost}>$132.00</Text>

        <Text>Payment for</Text>

        <View style={styles.card}>
          <Image source={require('../assets/Starbucks.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
          <View style={styles.txt}>
            <Text style={styles.cardtxt} >Starbucks Coffee</Text>
            <Text style={styles.cardtxt}>Dec 2, 2020 . 3:02 PM</Text>
            </View> 
        </View>

        <LongButton title="Done" onPress={() => navigation.navigate('Home')} />

        <TouchableOpacity onPress={() => alert('')} style={styles.payAgainButton}>
          <Text style={styles.payAgainText}>Pay Again</Text>
        </TouchableOpacity>

      </View>
      <Bottom/>
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
  head :{
    fontSize: 24,
    fontFamily: 'LilitaOne_400Regular',
    marginBottom:20,
  },
  cost :{
    fontSize: 28,
    fontFamily: 'LilitaOne_400Regular',
    marginBottom:20,
    color: "#00CCAA",
  },

  description: {
    fontSize: 16,
    fontFamily: 'Lobster_400Regular',
    maxWidth :300,
    color: 'Black',
    marginBottom: 20,
    marginVertical: 10,
    textAlign: 'center',
  },

  card: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: "center",
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 15,
    width: '80%',
  marginBottom: 25,
  
  },

  txt: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign:"center",
   
    marginLeft: 35,
  
  },

  cardtxt: {
    fontFamily: 'LilitaOne_400Regular',
   
    textAlign: "center",
  },
  payAgainButton: {
    
  },

  payAgainText: {
    color: '#007E57',
    fontSize: 16,
    fontFamily: 'LilitaOne_400Regular',
  },
 
  img: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});