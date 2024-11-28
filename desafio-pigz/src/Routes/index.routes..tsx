import { createStackNavigator } from "@react-navigation/Stack";
import React from "react";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import BottomRoutes from "./button.routes";

export function Router(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'#FFF'
            }
        }}
    >
         <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="BottomRoutes" component={BottomRoutes}/>
        </Stack.Navigator>
    )
}