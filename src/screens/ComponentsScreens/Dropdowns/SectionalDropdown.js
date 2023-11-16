import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../../appStyles/colorStyle";
import { secondaryFontColor } from "../../../appStyles/fontStyles";
import { sectionList } from "../../../components/Dropdown/dropdownData";
import SectionDropdown from "../../../components/Dropdown/SectionDropdown";

export const SectionalDropdownScreen =()=>{
    
    //Local State
    const [section, setSection] = useState(false);
    const [sectionData, setSectionData] = useState(null);

    //Height for dropdown
    const height = useRef(new Animated.Value( section ? 340 : 0)).current;
    const rotate = height.interpolate({
        inputRange:[0,340],
        outputRange:['0deg','180deg']
    });

    useEffect(()=>{
        if(section){
            Animated.timing(height, {toValue:340, duration:100, useNativeDriver:false}).start();
        } else {
            Animated.timing(height, {toValue:0, duration:100, useNativeDriver:false}).start();
        }
    },[section]);

    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>DROPDOWN</Text>
            {/* <ScrollView> */}
                <View style={styles.section}>
                    <Text style={styles.headingText}>SECTIONAL DROPDOWN</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> setSection(!section)}
                    >
                        <Text style={styles.buttonText}>
                            {sectionData && sectionData.label? `${sectionData.title} : ${sectionData.label}`:'Select Country'}
                        </Text>
                        <Animated.View style={{transform:[{rotateX:rotate}]}}>
                            <FontAwesome5 style={styles.icon} name="chevron-down" size={25}/>
                        </Animated.View>
                    </TouchableOpacity>
                    { !section ? null :
                        <SectionDropdown
                            visibleState={section} 
                            data={sectionList} 
                            onSelect={setSectionData}
                            selectionDone={setSection}
                            customStyles={{
                                dropdownStyle:{maxHeight:height},
                                cancelButton:styles.cancelButton,
                                cancelText:styles.cancelText,
                                sectionTitleStyle:styles.sectionStyle,
                                sectionTitleText:styles.sectionTitle
                            }}
                        />   
                    }
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
        //justifyContent:"center"
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
    },
    sectionStyle:{
        //alignItems: 'center',
        backgroundColor: "#234E70",//'#efefef',
        height: 40
    },
    sectionTitle:{
        fontSize:20,
        textAlign: 'center',
        color:secondaryFontColor
    }
})