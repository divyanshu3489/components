import React,{memo, useEffect, useRef, useState} from "react";
import { View, Text, TouchableOpacity, 
    StyleSheet, Animated } from "react-native";
import PropTypes from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { primaryFontColor } from "../../appStyles/fontStyles";

export const Accordion =(props)=>{

    //Props
    const data = props.data;
    const customStyles = props.customStyles;

    //Local state
    const [activeIndex, setActiveIndex] = useState(null);


    return(
        <View>
        {
            data.map((value, index)=>(
                    <SingleAccordion 
                        key={index} 
                        index={index} 
                        value={value} 
                        isOpen={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        customStyles={customStyles}
                    />
                )
            )
        }
        </View>
    )
};

const SingleAccordion = memo((props)=>{
    const{index, value, setActiveIndex, isOpen, customStyles} = props;

    //Animation for icon
    const height = useRef(new Animated.Value(isOpen ? 30 : 0)).current;
    const rotate = height.interpolate({
        inputRange:[0,30],
        outputRange:['0deg','-90deg']
    })

    useEffect(()=>{
        if(isOpen){
            Animated.timing(height, {toValue:30, duration:100, useNativeDriver:false}).start();
        } else {
            Animated.timing(height, {toValue:0, duration:100, useNativeDriver:false}).start();
        }
    },[isOpen]);

    return(
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.accordianContainer, customStyles.headerStyle]}
                onPress={()=>{
                    if(isOpen){
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(index);
                    }
                }}
            >
                <Text style={[styles.accordianHeader, customStyles.headerText]}>{value.header}</Text>
                <Animated.View style={{transform:[{rotate}]}}> 
                    <MaterialIcons name="keyboard-arrow-left" color={customStyles.headerText.color} size={customStyles.headerText.iconSize}/>
                </Animated.View>
            </TouchableOpacity>
            {isOpen ?
                <Animated.View style={[styles.accordianContent, customStyles.contentContainer, {minHeight:height}]}>
                    <Text style={[styles.accordianBody, customStyles.contentText]}>{value.body}</Text>
                </Animated.View> : null
            }
        </View>
    )
})

//Default Values for Props
Accordion.defaultProps = {
    customStyles:{
        headerStyle:{},
        headerText:{},
        contentContainer:{},
        contentText:{}
    }
}
Accordion.propTypes={
    data:PropTypes.array,
    customStyles:PropTypes.shape({
        headerStyle:PropTypes.object,
        headerText:PropTypes.object,
        contentContainer:PropTypes.object,
        contentText:PropTypes.object
    })
}

const styles = StyleSheet.create({
    container:{
        //alignItems:"center",
        //overflow:"hidden"
    },
    accordianContainer:{
        flexDirection:"row",
        //width:300,
        minHeight:40,
        paddingHorizontal:10,
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:2,
        borderRadius:10,
        marginBottom:5,
        //overflow:"hidden"
    },
    accordianContent:{
        flexDirection:"row",
        //maxWidth:300,
        minHeight:30,
        // flex:1,
        borderWidth:2,
        borderRadius:10,
        marginBottom:5,
        padding:2,
        backgroundColor:"#dfdfdf"
        //overflow:"hidden"
    },
    accordianHeader:{
        fontSize:18,
        color:primaryFontColor
    },
    accordianBody:{
        //maxWidth:270,
        //flex:0.9,
        fontSize:16,
        color:primaryFontColor
    }
})