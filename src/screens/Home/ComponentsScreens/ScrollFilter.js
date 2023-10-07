import React from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { ScrollFilter } from "../../../components/ScrollFilter/ScrollFilter";
import { Data } from "../../../components/ScrollFilter/buttonsData";

export const ScrollFilterScreen =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>SCROLL FILTER</Text>
            <ScrollFilter data = {Data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    },
    headingText:{
        padding:10,
        color:"#393733",
        fontWeight:'800',
        fontSize:30,
        textAlign:"center"
    }
})