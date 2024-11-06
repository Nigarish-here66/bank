import React from "react";
import { Text, View , StyleSheet , TouchableOpacity} from "react-native";

const Button = ({ title }) => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
                </TouchableOpacity>
           
        </View>
    );
};

const styles = StyleSheet.create({
   button: {
       alignItems: "center",
       justifyContent: "center",
       paddingVertical: 12,
       paddingHorizontal: 32,
       borderRadius: 4,
       elevation: 3,
       backgroundColor: "#00c395",
   },
   buttonText: {
       fontSize: 16,
       lineHeight: 21,
       fontWeight: "bold",
       letterSpacing: 0.25,
       color: "white",
   },
});

export default Button;