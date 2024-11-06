import React from "react";
import { Text, View , StyleSheet} from "react-native";
import Fontawesome from 'react-native-vector-icons/FontAwesome';
const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Fontawesome name="back" size={25} color="black" />  
          <Text style={styles.text}>{title}</Text>  
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default Header;