import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; 
import colors from "../../appStyles/colorStyle";
import { ButtonComponent } from "./ButtonComponents";

export const Home =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>COMPONENTS {`>>>>`}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <View style={styles.container}> */}
                    <ButtonComponent
                        //headerTitle = {'1.Scroll Filter by IMDb'}
                        buttonText = {'Scroll Filter'}
                        navigateTo = {'ScrollFilter'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#322e2f'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'2.Switch Filter'}
                        buttonText = {'Switch Filter'}
                        navigateTo = {'SwitchFilter'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#12a4d9'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'3.Accordion'}
                        buttonText = {'Accordion'}
                        navigateTo = {'Accordion'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#d9138a'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'4.Dropdowns'}
                        buttonText = {'Dropdowns'}
                        navigateTo = {'Dropdown'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#e2d810'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'4.Dropdowns'}
                        buttonText = {'Loader'}
                        navigateTo = {'Loader'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#5c3c92'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'4.Dropdowns'}
                        buttonText = {'Emojis'}
                        navigateTo = {'Emoji'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#12a4d9'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'4.Dropdowns'}
                        buttonText = {'Photo Slider'}
                        navigateTo = {'Slider'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#322e2f'}, 'textStyle':{color:'#fafafa'}}}
                    />
                    <ButtonComponent
                        //headerTitle = {'4.Dropdowns'}
                        buttonText = {'Custom Form'}
                        navigateTo = {'Form'}
                        buttonStyles = {{'viewStyle':{backgroundColor:'#e2d810'}, 'textStyle':{color:'#fafafa'}}}
                    />
                {/* </View> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:colors.appBgColor
    },
    headingText:{
        padding:10,
        color:"#393733",
        fontWeight:'800',
        fontSize:25,
        backgroundColor:colors.appBgColor
    }
})