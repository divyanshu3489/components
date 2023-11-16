import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../../appStyles/colorStyle";
import { primaryFontColor, secondaryFontColor } from "../../../appStyles/fontStyles";
import { singleSelection, multipleSelection } from "../../../components/Dropdown/dropdownData";
import FlatDropdown from "../../../components/Dropdown/FlatDropdown";

export const NormalDropdownScreen =()=>{
    
    //Local State
    const [single, setSingle] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [singleData, setSingleData] = useState({});
    const [multipleData, setMultipleData] = useState(null);

    //Height for dropdown
    const height = useRef(new Animated.Value(single || multiple ? 340 : 0)).current;
    const rotate = height.interpolate({
        inputRange:[0,340],
        outputRange:['0deg','180deg']
    });

    useEffect(()=>{
        if(single || multiple){
            Animated.timing(height, {toValue:340, duration:100, useNativeDriver:false}).start();
        } else {
            Animated.timing(height, {toValue:0, duration:100, useNativeDriver:false}).start();
        }
    },[single,multiple]);

    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>DROPDOWN</Text>
            {/* <ScrollView> */}
                <View style={styles.section}>
                    <Text style={styles.headingText}>SINGLE SELECTION DROPDOWN</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> setSingle(!single)}
                    >
                        <Text style={styles.buttonText}>
                            {singleData && singleData.label? singleData.label:'Select Country'}
                        </Text>
                        <Animated.View style={{transform:[{rotateX:rotate}]}}>
                            <FontAwesome5 style={styles.icon} name="chevron-down" size={25}/>
                        </Animated.View>
                    </TouchableOpacity>
                    {single ?
                        <FlatDropdown 
                            visibleState={single}
                            data={singleSelection} 
                            onSelect={setSingleData} 
                            selectionType="single" 
                            showSearch={true} 
                            showCancel={false}
                            dropdownHeader="Select Country"
                            selectionDone={setSingle}
                            customStyles={{
                                dropdownStyle:{maxHeight:height},
                                cancelButton:styles.cancelButton,
                                cancelText:styles.cancelText
                            }}
                        /> : null
                    }
                </View>
                <View style={styles.section}>
                    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                        <Text style={styles.headingText}>MULTIPLE SELECTION DROPDOWN</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=> setMultiple(!multiple)}
                        >
                            <Text style={styles.buttonText}>Select Countries</Text>
                            <Animated.View style={{transform:[{rotateX:rotate}]}}>
                                <FontAwesome5 style={styles.icon} name="chevron-down" size={25}/>
                            </Animated.View>
                        </TouchableOpacity>
                        {multiple ? 
                            <FlatDropdown
                                visibleState={multiple}
                                data={multipleSelection} 
                                onSelect={setMultipleData} 
                                selectionType="multiple" 
                                showSearch={true} 
                                dropdownHeader="Select Country"
                                selectionDone={setMultiple}
                                customStyles={{
                                    dropdownStyle:{maxHeight:height},
                                    cancelButton:styles.cancelButton,
                                    cancelText:styles.cancelText
                                }}
                            /> : null
                        }
                        {
                            multipleData? <Text style={[styles.buttonText, {color:primaryFontColor}]}>Selected Countries:{multipleData.toString()}</Text> : null
                        }
                    {/* </ScrollView> */}
                </View>
            {/* </ScrollView> */}
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
        textAlign:"center"
    },
    section:{
        flexGrow:1,
        // justifyContent:"center",
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#234E70",//'#efefef',
        height: 60,
        //borderColor:"gray",
        //borderWidth:1,
        borderRadius:10
    },
    buttonText: {
        flex: 1,
        fontSize:25,
        textAlign: 'center',
        color:secondaryFontColor
    },
    cancelButton:{
        alignItems: 'center',
        backgroundColor: "#234E70",//'#efefef',
        height: 40
    },
    cancelText:{
        fontSize:20,
        color:secondaryFontColor
    },
    icon: {
        marginRight: 10,
        color:secondaryFontColor
    }
})