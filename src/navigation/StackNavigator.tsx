import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const StackNavigator: React.FC<any> = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, statusBarHidden: true }}
    initialRouteName="Authentication"
  >
    <Stack.Screen name="Authentication" component={Authentication} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default StackNavigator;
