import React from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { SwitchFilter } from "../../../components/Filter/SwitchFilter";
import { Data } from "../../../components/Filter/buttonsData";

export const SwitchFilterScreen =()=>{
    return(
        <View style={styles.container}>
            <SwitchFilter data = {Data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    }
})