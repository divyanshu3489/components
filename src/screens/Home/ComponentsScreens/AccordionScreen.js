import React from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { Accordion } from "../../../components/Accordian/Accordion";
import { data } from "../../../components/Accordian/accordionData";

export const AccordionScreen =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>ACCORDION</Text>
            <Accordion 
                data={data}
                customStyles={{
                    headerStyle:styles.headerStyle,
                    headerText:styles.headerText,
                    contentContainer:styles.contentContainer,
                    contentText:styles.contentText
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        //justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    },
    headingText:{
        padding:10,
        color:"#393733",
        fontWeight:'800',
        fontSize:25,
        textAlign:"center"
    },
    headerStyle:{
        borderColor:0,
        backgroundColor:"#1868ae"//"#1e847f"
    },
    headerText:{
        color:"#fafafa"
    },
    contentContainer:{
        borderColor:0,
        //backgroundColor:"#d9a5b3"
    },
    /*contentText:{
        color:"#000000"
    }*/
})