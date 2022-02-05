import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Home: React.FC<{}> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <Text>home</Text>} />
      <Tab.Screen name="Settings" component={() => <Text>settings</Text>} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Home;
