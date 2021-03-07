import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CatList from "./screens/CatList";
import Cat from "./screens/Cat";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#F5353C" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "#fff",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{ title: "Cat List" }}
          name="CatList"
          component={CatList}
        />
        <Stack.Screen options={{ title: "Cat" }} name="Cat" component={Cat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
