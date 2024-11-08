import React from "react";
import { Text, View, StyleSheet, TextInput , TouchableOpacity } from "react-native";
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const InputField = ({ placeholder,icon,righttext,righttextstyle}) => {
    return (
        <View style={styles.container}>
          
        <TextInput
            style={styles.input} 
                placeholder={placeholder}
            />
            {righttext && <TouchableOpacity onpress={() => {}}><Text style={righttextstyle}>{righttext}</Text></TouchableOpacity>}
           <Fontawesome name={icon} size={20} color="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    input: {
        
        flex: 1,
        
    },
    icon: {
        marginRight: 10,
    }
});
export default InputField;