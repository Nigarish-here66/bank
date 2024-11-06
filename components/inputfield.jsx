import React from "react";
import { Text, View , StyleSheet , TextInput} from "react-native";

const InputField = ({ placeholder }) => {
    return (
        <View style={styles.container}>
          
        <TextInput
            style={styles.input} 
            placeholder={placeholder}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default InputField;