import React from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { Accordion } from "../../../components/Accordian/Accordion";
import { data } from "../../../components/Accordian/accordionData";

export const AccordionScreen =()=>{
    return(
        <View style={styles.container}>
            <Accordion data={data}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    }
})