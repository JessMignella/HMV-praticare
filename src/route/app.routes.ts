import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { Login } from "../screens/Login";

const {Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
    </NavigationContainer>
  );
}
