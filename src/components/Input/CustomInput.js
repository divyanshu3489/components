import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { screenWidth } from "../../appStyles/colorStyle";
import { Validations } from "./Validations";

export const CustomInput =({ label, validation })=>{
    //Local States
    const [input, setInput] = useState('');
    const [startEdit, setStartEdit] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    //Label Position 
    const position = useRef(new Animated.Value(0)).current;

    //Label Opacity
    const opacity = useRef(new Animated.Value(0)).current;

    //Validating input
    const handleInput=(valid)=>{
        const errorMsg = Validations.validate(input,valid);
        setErrorMsg(errorMsg);
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
                <Animated.Text style={[styles.label, {transform:[{translateY: position}], opacity:opacity}]}>{label ? label : 'Specify Label'}</Animated.Text>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={(value)=> setInput(value)}
                    placeholder={startEdit? '':label ? label : 'Specify Label'}
                    onFocus={
                        ()=>{
                            fadeIn();
                            setStartEdit(true)
                        }
                    }
                    onEndEditing={()=>{
                            if(input == ''){
                                fadeOut();
                                setStartEdit(false)
                            }
                            handleInput(validation);
                        }
                    }
                />
                {!errorMsg.error ? null : <Text style={styles.errorText}>{errorMsg.errorCode}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
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
    },
    errorText:{
        fontSize:16,
        paddingHorizontal:5,
        color:'#D30707'
    }
})