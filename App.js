import React from "react";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import Settings from "./Screens/Settings";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: "Home" },
  },

  Detail: {
    screen: Detail,
    navigationOptions: { title: "Detail" },
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    title: "Settings",
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    HOME: HomeStack,
    Settings: SettingsStack,
  },
  {
    initialRouteName: "HOME",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === "HOME") {
          iconName = `${Platform.OS === "ios" ? "ios" : "md"}-home`;
        } else if (routeName === "Settings") {
          iconName = `${Platform.OS === "ios" ? "ios" : "md"}-settings`;
        }
        return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: "#F2C834",
        inActiveTintColor: "#252534",
      },
    }),
  }
);

export default createAppContainer(AppNavigator);
