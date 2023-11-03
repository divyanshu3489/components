import React,{useEffect} from "react";
import { View, StyleSheet, Text } from "react-native"; 
import colors from "../../../appStyles/colorStyle";
import { CustomLoader } from "../../../components/Loader/CustomLoader";

export const LoaderScreen =()=>{
        
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>LOADER</Text>
            <CustomLoader loading={true} loaderShape={'circle'} size={'small'}/>
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
        fontSize:30,
        textAlign:"center"
    }
})