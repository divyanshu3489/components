import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Data } from "./buttonsData";

export const SwitchFilter =()=>{
    const [selectedItem, setSelectedItem] = useState(null);
    const [buttonsData, setButtonsData] = useState(Data);

    //Removing selected button from data
    const filterData =(selected)=> {
        let filtered = Data.filter((value)=> value.name != selected.name);
        setButtonsData(filtered);
    }

    return(
        <View style={{flexDirection:"row"}}>
        {
            !selectedItem ? null : 
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.selectedItem}
                onPress={()=>{
                    setSelectedItem(null);
                    setButtonsData(Data);
                }}
            >
                <Text style={styles.buttonText}>{selectedItem.name}</Text>
                <Entypo name="cross" size={20} color={"#054c99"}/>
            </TouchableOpacity>
        }
            <ScrollView 
                contentContainerStyle={{alignItems:"center", paddingHorizontal:10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.buttonContainer}>
                    {
                        buttonsData.map((data, index)=>(
                            <SingleButton 
                                lastIndex={buttonsData.length-1}
                                button={data}
                                key={index}
                                index={index}
                                selectedItem={setSelectedItem}
                                selectedIndex={filterData}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const SingleButton=({lastIndex, button, index, selectedItem, selectedIndex})=>{
    return(
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> {
                    selectedItem(button);
                    selectedIndex(button);
                }}
            >
                <Text style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
            { index != lastIndex ?
                <View style={styles.buttonSeparator}/> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        height:30,
        paddingHorizontal:10,
        borderWidth:2,
        borderColor:"#054c99",
        borderRadius:15
    },
    button:{
        justifyContent:"center"
    },
    buttonText:{
        fontSize:15,
        //paddingBottom:3,
        color:"#1685ff",
        paddingHorizontal:5
    },
    buttonSeparator:{
        width:2,
        backgroundColor:"#054c99"//"#222222"
    },
    selectedItem:{
        flexDirection:"row",
        height:30,
        //width:200,
        marginHorizontal:10,
        paddingHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#1687FF22",
        borderWidth:2,
        borderColor:'"#054c99',//"#222222",//"#1685ff",
        borderRadius:15
    }
})