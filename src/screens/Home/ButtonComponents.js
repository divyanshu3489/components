import React from "react";
import { View,TouchableOpacity,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ButtonComponent =(props)=>{
    
    //Props
    const headerTitle = props.headerTitle;
    const buttonText = props.buttonText;
    const navigateTo = props.navigateTo;

    //Navigation
    const navigation = useNavigation();

    return(
        <View style={styles.buttonContainer}>
            <Text>{headerTitle}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate(navigateTo)}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom:5,
        alignItems:"center"
    },
    button:{
        width:200,
        height:30,
        marginVertical:5,
        borderRadius:15,
        backgroundColor:"#008080",
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        color:"#ffffff"
    }
})
