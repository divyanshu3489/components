import React from "react";
import { View, StyleSheet } from "react-native"; 
import colors from "../../appStyles/colorStyle";
import { ButtonComponent } from "./ButtonComponents";

export const Home =()=>{
    return(
        <View style={styles.container}>
            <ButtonComponent
                headerTitle = {'1.Switch Filter by IMDb'}
                buttonText = {'Switch Filter'}
                navigateTo = {'SwitchFilter'}
            />
            <ButtonComponent
                headerTitle = {'2.Button Switch'}
                buttonText = {'Button Switch'}
                navigateTo = {'ButtonSwitch'}
            />
            <ButtonComponent
                headerTitle = {'3.Accordion'}
                buttonText = {'Accordion'}
                navigateTo = {'Accordion'}
            />
            <ButtonComponent
                headerTitle = {'4.Dropdowns'}
                buttonText = {'Dropdowns'}
                navigateTo = {'Dropdown'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:colors.appBgColor
    }
})