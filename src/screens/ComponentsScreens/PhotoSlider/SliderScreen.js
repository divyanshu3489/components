import React,{useEffect, useRef} from "react";
import { View,FlatList, Image, StyleSheet, Animated, Dimensions } from "react-native";
import { sliderData } from "./sliderData";
import { screenWidth } from "../../../appStyles/colorStyle";

export const SliderScreen=()=>{
    const sliderRef = useRef();
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, screenWidth);

    //Automatic scrolling 
    const infiniteScroll=()=>{
        const numberOfData = sliderData.length;
        let scrollValue = 0, scrolled = 0;

        setInterval(()=>{
            scrolled++;
            if(scrolled<numberOfData){
                scrollValue = scrollValue + screenWidth;
            } else {
                scrollValue = scrolled = 0;
            }
            sliderRef.current?.scrollToOffset({animated:true, offset:scrollValue})
        }, 3000);
    }

    useEffect(()=>{
        infiniteScroll();
    })

    const renderItem =({item, index})=>{
        
        //Image Source
        let source = item['logo'];
        return(
            <View style={styles.detailsContainer}>
                <Image source={source} style={styles.img}/>
            </View> 
        )
    }
    
    return(
        <View style={styles.container}>
            <FlatList
                ref={sliderRef}
                renderItem={renderItem}
                data={sliderData}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent:{
                        contentOffset:{x:scrollX}
                    }},
                ])}      
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    detailsContainer:{
        //minWidth:screenWidth,
        // padding:10,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    },
    img:{
        //flex:1,
        width:screenWidth,
        height:250
    }
});