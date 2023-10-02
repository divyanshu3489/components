import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { primaryFontColor, secondaryFontColor } from "../../appStyles/fontStyles";

export const CustomSwitch=(props)=>{

    //Props
    const data = props.data;
    const switchContainer = props.switchContainer;
    const selectionColor = props.selectionColor;
    const switchItem = props.switchItem;
    const selectedItem = props.selectedItem;
    const selectedItemColor = props.selectedItemColor;
    const switchTextStyle = props.switchTextStyle;

    //Selected item
    const itemClicked = (item, selectedIndex)=>{
        data.map((value, index)=>{
            if(index == selectedIndex){
                value.selected = true;
            } else {
                value.selected = false;
            }
        })
        selectedItem(item);
    }

    return(
        <View style={[styles.switchContainer, switchContainer]}>
            {
                data.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index}
                            style={[
                                styles.switchButton, switchItem,
                                {backgroundColor:item && item.selected? selectionColor:"#fafafa"}
                            ]}
                            activeOpacity={0.7}
                            disabled={item && item.selected? true:false}
                            onPress={()=>itemClicked(item, index)}
                        >
                            <Text style={[switchTextStyle ,item.selected ?{color:selectedItemColor, fontWeight:"700" }:styles.notSelected]}>{item.button}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-around",
        marginVertical:20,
        padding:2,
        //borderWidth:1
    },
    switchButton:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    notSelected:{
        color:primaryFontColor
    }
})