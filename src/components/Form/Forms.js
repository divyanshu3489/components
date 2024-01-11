import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { screenWidth } from "../../appStyles/colorStyle";
import { Validations } from "./Validations";

export const Form =()=>{
    const [input, setInput] = useState('');
    const [startEdit, setStartEdit] = useState(false);
    // const [opacity, setOpacity] = useState(0);

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
          duration: 400,
          useNativeDriver: true,
        }).start();

        Animated.timing(opacity, {
            toValue: 1,
            duration: 400,
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
                    <Animated.Text style={[styles.label, {transform:[{translateY: position}], opacity:opacity}]}>Name</Animated.Text>
                {/* } */}
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=> setInput(value)}
                    placeholder={startEdit? '':"Name"}
                    onFocus={
                        ()=>{
                            fadeIn();
                            //setStartEdit(true)
                        }
                    }
                    onEndEditing={()=>{
                            fadeOut();
                            //setStartEdit(false)
                        }
                    }
                />
            </View>
            <TextInput
                    style={[styles.input, {marginTop:10}]}
                    onChangeText={(value)=> setInput(value)}
                    placeholder="Name"
                    //onFocus={()=>setStartEdit(true)}
                    //onEndEditing={()=>setStartEdit(false)}
                />
            <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleInput}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
    },
    submitButton:{
        width:150,
        height:40,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"#32CBD9",
        borderRadius:10
    },
    buttonText:{
        color:'#000000',
        fontSize:18,
        fontWeight:'700'
    }
})