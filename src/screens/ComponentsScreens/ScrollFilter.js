import React from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../appStyles/colorStyle";
import { ScrollFilter } from "../../components/ScrollFilter/ScrollFilter";
import { Data } from "../../components/ScrollFilter/buttonsData";

export const ScrollFilterScreen =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>SCROLL FILTER</Text>
            <ScrollFilter 
                data = {Data}
                buttonContainerStyle = {styles.buttonContainer}
                buttonTextStyle = {styles.buttonText}
                selectedButtonStyle = {styles.selectedItem}
                buttonSeparatorStyle = {styles.buttonSeparator}
                crossIconStyle = {styles.crossIcon}
            />
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
    },
    buttonContainer:{
        borderWidth:0,
        backgroundColor:"#039fbe"
    },
    buttonText:{
        fontSize:18,
        color:"#fafafa"
    },
    buttonSeparator:{
        backgroundColor:"#fafafa"
    },
    selectedItem:{
        borderWidth:0,
        backgroundColor:"#b20238"
    },
    crossIcon:{
        tintColor:"#fafafa",
    }
})