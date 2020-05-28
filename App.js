import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import TacoFoodDetailScreen from "./screens/TacoFoodDetailScreen";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Foods" component={BottomTabNavigator} />
            <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
            <Stack.Screen
              name="TacoFoodDetail"
              component={TacoFoodDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
