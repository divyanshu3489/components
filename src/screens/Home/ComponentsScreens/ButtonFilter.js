import React,{ useState } from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { CustomSwitch } from "../../../components/Button Switch/CustomSwitch";
import { switchData } from "../../../components/Button Switch/buttonsData";

export const ButtonSwitchScreen =()=>{

    const [selectedItem, setSelectedItem] = useState(switchData[0]);

    return(
        <View style={styles.container}>
            <CustomSwitch 
                data={switchData} 
                switchContainer={styles.switchContainer}
                switchItem={styles.switchItem} 
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
        justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    },
    switchContainer:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-around",
        borderWidth:1,
        borderColor:"#333333",
        borderRadius:20,
        marginVertical:10
    },
    switchItem:{
        borderRadius:20
    },
    selectedItem:{
        color:"#333333",
        fontWeight:"700",
        paddingTop:5,
        alignSelf:"center"
    }
})