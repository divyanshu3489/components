import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DropdownStack from "./DropdownStack";
import { Home } from "../screens/Home/Home";
import { ScrollFilterScreen } from "../screens/ComponentsScreens/ScrollFilter";
import { SwitchFilterScreen } from "../screens/ComponentsScreens/SwitchFilter";
import { AccordionScreen } from "../screens/ComponentsScreens/AccordionScreen";
import { LoaderScreen } from "../screens/ComponentsScreens/LoaderScreen";
import { EmojisScreen } from "../screens/ComponentsScreens/EmojisScreen";
import { SliderScreen } from "../screens/ComponentsScreens/PhotoSlider/SliderScreen";
import { CouponScreen } from "../screens/ComponentsScreens/Coupons/CouponScreen";

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
                component={DropdownStack}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Loader" 
                component={LoaderScreen}
                options={{headerTitle:'Loader'}}
            />
            <Stack.Screen 
                name="Emoji" 
                component={EmojisScreen}
                options={{headerTitle:'Emojis'}}
            />
            <Stack.Screen 
                name="Slider" 
                component={SliderScreen}
                options={{headerTitle:'Photo Slider'}}
            />
            <Stack.Screen 
                name="Coupons" 
                component={CouponScreen}
                options={{headerTitle:'Coupons'}}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;