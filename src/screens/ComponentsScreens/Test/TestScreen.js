import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { CustomInput } from "../../../components/Input/CustomInput";

export const TestScreen=()=>{
    return(
        // <ScrollView>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <CustomInput label="First Name" validation="empty"/>
                    <CustomInput label="Last Name" validation="empty"/>
                    <CustomInput label="City" validation="empty"/>
                    <CustomInput label="Country" validation="empty"/>
                    <CustomInput label="Mobile" validation="empty"/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.submitButton}
                        // onPress={handleInput}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center'
    },
    formContainer:{
        flex:1
    },
    buttonContainer:{
        flex:0.25
    },
    submitButton:{
        width:150,
        height:40,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"#32CBD9",
        borderRadius:10
    },
    buttonText:{
        color:'#000000',
        fontSize:18,
        fontWeight:'700'
    }
});