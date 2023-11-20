import React,{useState, useEffect, useRef} from "react";
import { View, StyleSheet, Animated, TouchableOpacity, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../appStyles/colorStyle";
import { secondaryFontColor } from "../../appStyles/fontStyles"
import FlatDropdown from "../../components/Dropdown/FlatDropdown";
import { EmojiText } from "../../components/Emoji/Emoji";
import Mapper from "../../components/Emoji/Mapper";

export const EmojisScreen =()=>{

    //Local State
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState('');

    //Height for dropdown
    const height = useRef(new Animated.Value(visible ? 340 : 0)).current;
    const rotate = height.interpolate({
        inputRange:[0,340],
        outputRange:['0deg','180deg']
    });

    useEffect(()=>{
        if(visible){
            Animated.timing(height, {toValue:340, duration:100, useNativeDriver:false}).start();
        } else {
            Animated.timing(height, {toValue:0, duration:100, useNativeDriver:false}).start();
        }
    },[visible]);
    
    //Creating Emoji Names Array
    const emojiNames = Object.keys(Mapper);
    const EmojiData = emojiNames.map((value, index)=>{
        return {label:value.toUpperCase(), value:value}
    });

    return(
        <View style={styles.container}>
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> setVisible(!visible)}
                >
                    <Text style={styles.buttonText}>
                        {selected && selected.label? selected.label:'Select Emoji'}
                    </Text>
                    <Animated.View style={{transform:[{rotateX:rotate}]}}>
                        <FontAwesome5 style={styles.icon} name="chevron-down" size={25}/>
                    </Animated.View>
                </TouchableOpacity>
                {visible ?
                    <FlatDropdown 
                        visibleState={visible}
                        data={EmojiData} 
                        onSelect={setSelected} 
                        selectionType="single" 
                        showSearch={true} 
                        showCancel={false}
                        selectionDone={setVisible}
                        customStyles={{
                            dropdownStyle:{maxHeight:height},
                            cancelButton:styles.cancelButton,
                            cancelText:styles.cancelText
                        }}
                    /> : null
                }
            </View>
            <View style={styles.section}>
            {
                !selected ? <Text style={styles.emojiStyle}>Here comes the Emoji!!</Text> :
                    <EmojiText name={selected.value} size={40} emojiStyle={styles.emojiStyle}/>
            }
            </View>
      </View> 
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignContent:"center",
        backgroundColor:colors.appBgColor
    },
    section:{
        flexGrow:1,
        // justifyContent:"center",
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#234E70",//'#efefef',
        height: 60,
        //borderColor:"gray",
        //borderWidth:1,
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
    },
    emojiStyle:{
        textAlign:'center',
        fontSize:25
    }
});
