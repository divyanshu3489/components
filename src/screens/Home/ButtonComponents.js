import React from "react";
import { View,TouchableOpacity,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ButtonComponent =(props)=>{
    
    //Props
    const headerTitle = props.headerTitle;
    const buttonText = props.buttonText;
    const navigateTo = props.navigateTo;
    const buttonStyles = props.buttonStyles;

    //Navigation
    const navigation = useNavigation();

    return(
        <View style={styles.buttonContainer}>
            {/* <Text>{headerTitle}</Text> */}
            <TouchableOpacity
                style={[styles.button, buttonStyles['viewStyle']]}
                onPress={()=>navigation.navigate(navigateTo)}
            >
                <Text style={[styles.buttonText, buttonStyles['textStyle']]}>{buttonText}</Text>
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
        width:230,
        height:80,
        marginVertical:5,
        borderRadius:30,
        backgroundColor:"#008080",
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        color:"#ffffff",
        fontSize:30,
        fontWeight:'600'
    }
})
