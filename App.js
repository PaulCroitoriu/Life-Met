import React from "react";
import { createAppContainer } from "react-navigation";
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
  { initialRouteName: "HOME" }
);

export default createAppContainer(AppNavigator);
