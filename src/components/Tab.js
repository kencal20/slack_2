import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { View } from "react-native";
import Home from "../pages/Home";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Tab = createBottomTabNavigator();
// createMaterialBottomTabNavigator();
export default function B_tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          //   height: 60,
          position: "absolute",
          // bottom: 25,
          // right: 16,
          // left: 16,
          // top: 830,
          borderRadius: 15,
          borderWidth: 1,
          //   tabBarIcon:{

          //   }
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="home" size={30} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="login" size={30} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name="person-add-alt-1" size={30} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
