import React,{ useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { loaderSizes } from "./colors";

export const CustomLoader =(props)=>{
    
    //Props
    const colors = props.colors;
    const loading = props.loading;
    const loaderShape = props.loaderShape;
    const size = props.size;

    const [visible, setVisible] = useState(loading);
    
    //Storing ref values in array
    let animatedValues = [];
    if(loading){
        //Storing ref values in array
        animatedValues = colors.map((value, index)=>{
            const animate = useRef(new Animated.Value(0)).current;
            return animate;
        });

        //Starting Animation for each item
        useEffect(()=>{
            const animations = colors.map((value, index) => {
                return Animated.timing(animatedValues[index], {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver:true
                });
            });
            Animated.loop(
                Animated.stagger(400, animations),
                {iterations: -1},
            ).start();
        })
    
        return(
            <View style={styles.container}>
                {
                    colors.map((color, index)=>{
                        const opacity = animatedValues[index];
                        return(
                            <Animated.View 
                                key={index} 
                                style={[
                                    styles.loader,
                                    loaderShape && loaderShape != 'default' ? loaderSizes[loaderShape][size] : loaderSizes['default'],
                                    {backgroundColor:color, opacity:opacity}
                                ]}
                            />
                        )
                    })
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFill,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0000006a"
    },
    loader:{
        margin:2,
        backgroundColor:"#000000"
    }
})