import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SwitchFilterScreen } from "../screens/Home/ComponentsScreens/SwitchFilter";
import { ButtonSwitchScreen } from "../screens/Home/ComponentsScreens/ButtonFilter";
import { AccordionScreen } from "../screens/Home/ComponentsScreens/AccordionScreen";
import { DropdownScreen } from "../screens/Home/ComponentsScreens/DropdownScreen";
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
                options={{headerTitle:'Switch Filter'}}
            />
            <Stack.Screen 
                name="ButtonSwitch" 
                component={ButtonSwitchScreen}
                options={{headerTitle:'Button Switch'}}
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
        </Stack.Navigator>
    );
}

export default HomeStack;