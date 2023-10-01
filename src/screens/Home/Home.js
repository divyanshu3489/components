import React from "react";
import { View, StyleSheet } from "react-native"; 
import colors from "../../appStyles/colorStyle";
import { ButtonComponent } from "./ButtonComponents";

export const Home =()=>{
    return(
        <View style={styles.container}>
            <ButtonComponent
                headerTitle = {'1.SwitchFilter by IMDb'}
                buttonText = {'Switch Filter'}
                navigateTo = {'SwitchFilter'}
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