import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";

const MainRouter =()=>{
    return(
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    );
}

export default MainRouter;