import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import Onboarding from "../pages/Onboarding";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const StackNavigator: React.FC<any> = () => {
  const [isOnboard, setIsOnboard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkIsOnboard = async () => {
    try {
      const isOnboard = await AsyncStorage.getItem("onboarding_completed");
      if (isOnboard === "true") {
        setIsOnboard(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIsOnboard();
  }, []);

  if (isLoading) return null;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, statusBarHidden: true }}
      initialRouteName={isOnboard ? "Authentication" : "Onboarding"}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
