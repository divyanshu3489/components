import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Form } from "../../../components/Form/Forms";

export const TestScreen=()=>{
    return(
        <Form/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
});