import React, { useState, useRef } from "react";
import { View,Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import crossImg from "../../assets/cross.png";

export const ScrollFilter =(props)=>{
    
    const scrollViewRef = useRef(null);

    //Props
    const Data = props.data;
    const buttonContainerStyle = props.buttonContainerStyle;
    const buttonTextStyle = props.buttonTextStyle;
    const buttonSeparatorStyle = props.buttonSeparatorStyle;
    const selectedButtonStyle = props.selectedButtonStyle;
    const crossIconStyle = props.crossIconStyle;

    //Local States
    const [selectedItem, setSelectedItem] = useState(null);
    const [buttonsData, setButtonsData] = useState(Data);

    //Removing selected button from data
    const filterData =(selected)=> {
        let filtered = Data.filter((value)=> value.name != selected.name);
        setButtonsData(filtered);
        scrollViewRef.current?.scrollTo({x: 0, animated: true});
    }

    return(
        <View style={styles.container}>
            {
                !selectedItem ? null : 
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.selectedItem, selectedButtonStyle]}
                    onPress={()=>{
                        setSelectedItem(null);
                        setButtonsData(Data);
                    }}
                >
                    <Text style={[styles.buttonText, buttonTextStyle]}>{selectedItem.name}</Text>
                    <Image source={crossImg} style={[styles.crossImage, crossIconStyle]}/>
                </TouchableOpacity>
            }
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollViewContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={[styles.buttonContainer, buttonContainerStyle]}>
                    {
                        buttonsData.map((data, index)=>(
                            <SingleButton 
                                lastIndex={buttonsData.length-1}
                                button={data}
                                key={index}
                                index={index}
                                selectedItem={setSelectedItem}
                                selectedIndex={filterData}
                                buttonTextStyle={buttonTextStyle}
                                buttonSeparatorStyle={buttonSeparatorStyle}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const SingleButton=(props)=>{
     
    //Props
    const index = props.index;
    const button = props.button;
    const lastIndex = props.lastIndex;
    const selectedItem = props.selectedItem;
    const selectedIndex = props.selectedIndex;
    const buttonTextStyle = props.buttonTextStyle;
    const buttonSeparatorStyle = props.buttonSeparatorStyle;
 
    return(
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> {
                    selectedItem(button);
                    selectedIndex(button);
                }}
            >
                <Text style={[styles.buttonText, buttonTextStyle]}>{button.name}</Text>
            </TouchableOpacity>
            { index != lastIndex ?
                <View style={[styles.buttonSeparator, buttonSeparatorStyle]}/> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    scrollViewContainer:{ 
        paddingHorizontal:10
    },
    buttonContainer:{
        flexDirection:"row",
        height:40,
        paddingHorizontal:5,
        borderWidth:1,
        borderColor:"#054c99",
        borderRadius:20,
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
        backgroundColor:"#054c99"
    },
    selectedItem:{
        flexDirection:"row",
        height:40,
        marginHorizontal:10,
        paddingHorizontal:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#1687FF22",
        borderWidth:1,
        borderColor:"#054c99",
        borderRadius:20
    },
    crossImage:{
        width:13,
        height:13,
        tintColor: '#1685ff',
    }
})