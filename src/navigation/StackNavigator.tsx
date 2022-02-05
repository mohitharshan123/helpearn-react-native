import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authentication from "../screens/Authentication";
import Dashboard from "../screens/Dashboard";
import Onboarding from "../screens/Onboarding";
import { UserContext } from "../contexts/user";

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC<any> = () => {
  const [isOnboard, setIsOnboard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(UserContext);

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

  const getInitialRoute = () => {
    if (user) return "Dashboard";
    if (isOnboard) return "Authentication";
    return "Onboarding";
  };

  if (isLoading) return <Text>Loading</Text>;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, statusBarHidden: true }}
      initialRouteName={getInitialRoute()}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
