import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import crossImg from "../../assets/cross.png";

export const ScrollFilter =(props)=>{
    
    //Props
    const Data = props.data;

    //Local States
    const [selectedItem, setSelectedItem] = useState(null);
    const [buttonsData, setButtonsData] = useState(Data);

    //Removing selected button from data
    const filterData =(selected)=> {
        let filtered = Data.filter((value)=> value.name != selected.name);
        setButtonsData(filtered);
    }

    return(
        <View style={styles.container}>
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
                    <Image source={crossImg} style={styles.crossImage}/>
                </TouchableOpacity>
            }
            <ScrollView 
                contentContainerStyle={styles.scrollViewContainer}
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
    container:{
        flexDirection:"row"
    },
    scrollViewContainer:{
        flex:1,
        justifyContent:"center"
    },
    buttonContainer:{
        flexDirection:"row",
        height:40,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"#054c99",
        borderRadius:20
    },
    button:{
        justifyContent:"center"
    },
    buttonText:{
        fontSize:18,
        color:"#1685ff",
        paddingHorizontal:5
    },
    buttonSeparator:{
        width:1,
        backgroundColor:"#054c99"//"#222222"
    },
    selectedItem:{
        flexDirection:"row",
        height:40,
        //width:200,
        marginHorizontal:10,
        paddingHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#1687FF22",
        borderWidth:1,
        borderColor:'"#054c99',//"#222222",//"#1685ff",
        borderRadius:20
    },
    crossImage:{
        width:13,
        height:13,
        tintColor: '#1685ff',
    }
})