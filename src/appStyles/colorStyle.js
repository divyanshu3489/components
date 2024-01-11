import { StyleSheet, Dimensions } from "react-native";

export const screenWidth = Dimensions.get('window').width;

const Components = StyleSheet.create({
    headerColorActive:"#FB7338",
    headerColorInactive:"#CACACA",
    appBgColor:"#fff1e1",//"#fbfbfb",
    screenIcon:"#666666"
})

export default Components;