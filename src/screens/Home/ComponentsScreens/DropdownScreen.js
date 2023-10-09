import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../../appStyles/colorStyle";
import { primaryFontColor, secondaryFontColor } from "../../../appStyles/fontStyles";
import { singleSelection, multipleSelection, sectionList } from "../../../components/Dropdown/dropdownData";
import FlatDropdown from "../../../components/Dropdown/FlatDropdown";
import SectionDropdown from "../../../components/Dropdown/SectionDropdown";

export const DropdownScreen =()=>{
    
    const [single, setSingle] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [section, setSection] = useState(false);
    const [singleData, setSingleData] = useState({});
    const [multipleData, setMultipleData] = useState(null);
    const [sectionData, setSectionData] = useState(null);

    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>DROPDOWN</Text>
            <View style={styles.section}>
                <Text style={styles.headingText}>SINGLE SELECTION DROPDOWN</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> setSingle(true)}
                >
                    <Text style={styles.buttonText}>
                        {singleData && singleData.label? singleData.label:'Select Country'}
                    </Text>
                    <FontAwesome5 style={styles.icon} name="chevron-down" size={20}/>
                </TouchableOpacity>
                {single ?
                    <FlatDropdown 
                        visibleState={single}
                        data={singleSelection} 
                        onSelect={setSingleData} 
                        selectionType="single" 
                        showSearch={true} 
                        dropdownHeader="Select Country"
                        selectionDone={setSingle}
                    /> : null
                }
            </View>
            <View style={styles.section}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headingText}>MULTIPLE SELECTION DROPDOWN</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> setMultiple(true)}
                    >
                        <Text style={styles.buttonText}>Select Countries</Text>
                        <FontAwesome5 style={styles.icon} name="chevron-down" size={20}/>
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
                        /> : null
                    }
                    {
                        multipleData? <Text style={[styles.buttonText, {color:primaryFontColor}]}>Selected Countries:{multipleData.toString()}</Text> : null
                    }
                </ScrollView>
            </View>
            <View style={styles.section}>
                <Text style={styles.headingText}>SECTIONAL DROPDOWN</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> setSection(true)}
                >
                    <Text style={styles.buttonText}>
                        {sectionData && sectionData.label? sectionData.label:'Select Country'}
                    </Text>
                    <FontAwesome5 style={styles.icon} name="chevron-down" size={20}/>
                </TouchableOpacity>
                { !section ? null :
                    <SectionDropdown
                        visibleState={section} 
                        data={sectionList} 
                        onSelect={setSectionData}
                        selectionDone={setSection}
                        //dropdownHeader="Select Time Slot"
                    />   
                }
            </View>
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
        flex:1,
        justifyContent:"center"
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
    icon: {
        marginRight: 10,
        color:secondaryFontColor
    }
})