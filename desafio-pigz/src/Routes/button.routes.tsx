import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";




const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
   
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}
    
    >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    
  );
}
