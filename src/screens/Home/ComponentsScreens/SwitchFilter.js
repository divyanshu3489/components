import React,{ useState } from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { SwitchFilter } from "../../../components/SwitchFilter/SwitchFilter";
import { switchData } from "../../../components/SwitchFilter/buttonsData";

export const SwitchFilterScreen =()=>{

    const [selectedItem, setSelectedItem] = useState(switchData[0]);

    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>SWITCH FILTER</Text>
            <SwitchFilter 
                data={switchData} 
                switchContainer={styles.switchContainer}
                switchItem={styles.switchItem}
                switchTextStyle={styles.switchText}
                selectionColor={"#f0e68c"}
                selectedItemColor={"#333333"}
                selectedItem={setSelectedItem}
            />
            {selectedItem?
                <Text style={styles.selectedItem}>{selectedItem.button}</Text> : <Text>Nothing Selected</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
    switchContainer:{
        height:60,
        //borderWidth:1,
        borderColor:"#333333",
        borderRadius:30,
        marginVertical:10
    },
    switchItem:{
        borderRadius:30
    },
    switchText:{
        fontSize:25
    },
    selectedItem:{
        fontSize:20,
        color:"#333333",
        fontWeight:"700",
        paddingTop:5,
        alignSelf:"center"
    }
})