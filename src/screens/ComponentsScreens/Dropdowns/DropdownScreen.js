import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../appStyles/colorStyle";
import { ButtonComponent } from "../../Home/ButtonComponents";

export const DropdownScreen =()=>{
    
    return(
        <View style={styles.container}>
            {/* <View style={styles.container}> */}
                <ButtonComponent
                    //headerTitle = {'1.Normal Dropdown'}
                    buttonText = {'Normal Dropdown'}
                    navigateTo = {'Normal'}
                    buttonStyles = {{'viewStyle':{backgroundColor:'#322e2f', width:300}, 'textStyle':{color:'#fafafa'}}}
                />
                <ButtonComponent
                    //headerTitle = {'2.Section Dropdown'}
                    buttonText = {'Section Dropdown'}
                    navigateTo = {'Section'}
                    buttonStyles = {{'viewStyle':{backgroundColor:'#12a4d9', width:300}, 'textStyle':{color:'#fafafa'}}}
                />
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:colors.appBgColor
    },
    headingText:{
        padding:10,
        color:"#393733",
        fontWeight:'800',
        fontSize:25,
        backgroundColor:colors.appBgColor
    }
})