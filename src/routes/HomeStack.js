import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SwitchFilterScreen } from "../screens/Home/ComponentsScreens/SwitchFilter";
import { Home } from "../screens/Home/Home";

const HomeStack =()=>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
            />
            <Stack.Screen 
                name="SwitchFilter" 
                component={SwitchFilterScreen}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;