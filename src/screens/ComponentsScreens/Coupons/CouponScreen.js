import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const CouponScreen=()=>{
    
    return(
        <View style={styles.container}>
            <Text>Coupon Generate</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
});