import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollFilterScreen } from "../screens/Home/ComponentsScreens/ScrollFilter";
import { SwitchFilterScreen } from "../screens/Home/ComponentsScreens/SwitchFilter";
import { AccordionScreen } from "../screens/Home/ComponentsScreens/AccordionScreen";
import { DropdownScreen } from "../screens/Home/ComponentsScreens/DropdownScreen";
import { Home } from "../screens/Home/Home";
import { LoaderScreen } from "../screens/Home/ComponentsScreens/LoaderScreen";

const HomeStack =()=>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
            />
            <Stack.Screen 
                name="ScrollFilter" 
                component={ScrollFilterScreen}
                options={{headerTitle:'Scroll Filter'}}
            />
            <Stack.Screen 
                name="SwitchFilter" 
                component={SwitchFilterScreen}
                options={{headerTitle:'Switch Filter'}}
            />
            <Stack.Screen 
                name="Accordion" 
                component={AccordionScreen}
                options={{headerTitle:'Accordion'}}
            />
            <Stack.Screen 
                name="Dropdown" 
                component={DropdownScreen}
                options={{headerTitle:'Dropdowns'}}
            />
            <Stack.Screen 
                name="Loader" 
                component={LoaderScreen}
                options={{headerTitle:'Loader'}}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;