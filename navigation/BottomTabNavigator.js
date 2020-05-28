import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import FoodsScreen from "../screens/FoodsScreen";
import TacoTableScreen from "../screens/TacoTableScreen";

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Foods";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Tab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Tab.Screen
        name="Foods"
        component={FoodsScreen}
        options={{
          title: "Lista de Substituição",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="food-variant" />
          ),
        }}
      />
      <Tab.Screen
        name="TacoTable"
        component={TacoTableScreen}
        options={{
          title: "Tabela TACO",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="nutrition" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Foods":
      return "Lista de Substituição";
    case "AllFoods":
      return "Lista de Substituição 2";
    case "TacoTable":
      return "Tabela TACO";
  }
}
