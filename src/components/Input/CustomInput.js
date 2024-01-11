import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { screenWidth } from "../../appStyles/colorStyle";
import { Validations } from "./Validations";

export const CustomInput =({ label })=>{

    const [input, setInput] = useState('');
    const [startEdit, setStartEdit] = useState(false);

    //Position 
    const position = useRef(new Animated.Value(0)).current;

    //Opacity
    const opacity = useRef(new Animated.Value(0)).current;

    //Validating input
    const handleInput=()=>{
        const errorMsg = Validations.validate(input, "empty");
        console.log(errorMsg);
    }

    //Fade IN
    const fadeIn = () => {
        Animated.timing(position, {
          toValue: -20,
          duration: 350,
          useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
        }).start();
      };

    //Fade Out
    const fadeOut = () => {
        Animated.timing(position, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return(
        <View style={styles.container}>
            <View>
                {/* {!startEdit? null : */}
                    <Animated.Text style={[styles.label, {transform:[{translateY: position}], opacity:opacity}]}>{label ? label : 'Specify Label'}</Animated.Text>
                {/* } */}
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=> setInput(value)}
                    placeholder={startEdit? '':label ? label : 'Specify Label'}
                    onFocus={
                        ()=>{
                            fadeIn();
                            setStartEdit(true)
                        }
                    }
                    onEndEditing={()=>{
                            fadeOut();
                            setStartEdit(false)
                        }
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#ffffff'
    },
    label:{
        position:'absolute',
        zIndex:1,
        top:6,
        left:15,
        fontSize:18,
        paddingHorizontal:5,
        color:'#000000',
        backgroundColor:"#ffffff"
    },
    input:{
        backgroundColor:"#ffffff",
        width:screenWidth-50,
        height:50,
        paddingStart:10,
        borderWidth:1,
        borderRadius:15,
        borderColor:"#000000"
    }
})