import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DropdownScreen } from "../screens/ComponentsScreens/Dropdowns/DropdownScreen";
import { NormalDropdownScreen } from "../screens/ComponentsScreens/Dropdowns/NormalDropdown";
import { SectionalDropdownScreen } from "../screens/ComponentsScreens/Dropdowns/SectionalDropdown";

const DropdownStack =()=>{
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Dropdown " 
                component={DropdownScreen}
                options={{headerTitle:'Dropdowns'}}
            />
            <Stack.Screen 
                name="Normal" 
                component={NormalDropdownScreen}
                options={{headerTitle:'Normal Dropdown'}}
            />
            <Stack.Screen 
                name="Section" 
                component={SectionalDropdownScreen}
                options={{headerTitle:'Sectional Dropdown'}}
            />
        </Stack.Navigator>
    );
}

export default DropdownStack;