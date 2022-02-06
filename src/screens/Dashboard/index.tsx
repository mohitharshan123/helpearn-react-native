import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import {
  HomeActive,
  HomeInactive,
  MessagesInactive,
  NotificationsInactive,
  SearchActive,
  SearchInactive,
  MessagesActive,
  NotificationsActive,
} from "../../assets";
import AddButton from "../../components/Button/AddButton";

const Tab = createBottomTabNavigator();

const NoopComponent = () => {
  return null;
};

const Dashboard: React.FC<{}> = () => {
  const tabBarScreenOptions = ({ route: { name: routeName } }) => ({
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarIcon: ({ focused }) => {
      switch (routeName) {
        case "Home":
          return focused ? <HomeActive /> : <HomeInactive />;
        case "Messages":
          return focused ? <MessagesActive /> : <MessagesInactive />;
        case "Notifications":
          return focused ? <NotificationsActive /> : <NotificationsInactive />;
        case "Settings":
          return focused ? <SearchActive /> : <SearchInactive />;
        default:
          break;
      }
    },
  });
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Home} />
      <Tab.Screen
        name={"Add"}
        component={NoopComponent}
        options={{
          tabBarButton: () => <AddButton />,
        }}
      />
      <Tab.Screen name="Notifications" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#30444E",
    height: 60,
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
  },
});

export default Dashboard;
