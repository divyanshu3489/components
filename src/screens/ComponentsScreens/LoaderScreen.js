import React,{useEffect, useState, useRef} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import colors from "../../appStyles/colorStyle"; 
import { secondaryFontColor } from "../../appStyles/fontStyles";
import { CustomLoader } from "../../components/Loader/CustomLoader";
import { loaderColors, loaderTypeDD } from "../../components/Loader/colors";

export const LoaderScreen =()=>{

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(false);

    //Height for dropdown
    const height = useRef(new Animated.Value(visible ? 340 : 0)).current;
    const rotate = height.interpolate({
        inputRange:[0,340],
        outputRange:['0deg','180deg']
    });
    
    let loaderTypes = [];
    useEffect(()=>{
        if(visible){
            Animated.timing(height, {toValue:340, duration:100, useNativeDriver:false}).start();
        } else {
            Animated.timing(height, {toValue:0, duration:100, useNativeDriver:false}).start();
        }

        if(selected){
            loaderTypes = selected.value.split(':');
            setLoading(true);
        }
    },[visible,selected]);

    /*useEffect(()=>{
        if(selected){
            loaderTypes = selected.value.split(':');
            setLoading(true);
        }
    },[selected]);*/


    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>LOADER</Text>
            {/*<Text style={styles.subHeadingText}>Pick Loader Type</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=> setVisible(!visible)}
            >
                <Text style={styles.buttonText}>
                    {selected && selected.label? selected.label:'Pick Loader Type'}
                </Text>
                <Animated.View style={{transform:[{rotateX:rotate}]}}>
                    <FontAwesome5 style={styles.icon} name="chevron-down" size={20}/>
                </Animated.View>
            </TouchableOpacity>
            {visible ?
                <FlatDropdown 
                    visibleState={visible}
                    data={loaderTypeDD} 
                    onSelect={setSelected} 
                    selectionType="single"
                    showCancel={false}
                    selectionDone={setVisible}
                    customStyles={{
                        dropdownStyle:{maxHeight:height}
                    }}
                /> : null
            }*/}
            <CustomLoader colors={loaderColors} loading={true} loaderShape={'circle'} size={'small'}/>
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
        fontSize:30,
        textAlign:"center"
    },
    subHeadingText:{
        padding:10,
        color:"#393733",
        fontWeight:'600',
        fontSize:20,
        textAlign:"center"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#234E70",//'#efefef',
        height: 60,
        borderRadius:10
    },
    buttonText: {
        flex: 1,
        fontSize:25,
        textAlign: 'center',
        color:secondaryFontColor
    },
    icon: {
        marginRight: 10,
        color:secondaryFontColor
    }
})