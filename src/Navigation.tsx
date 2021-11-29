import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import { routesConfig, routeList } from "./config/routes.config";
import { ResultModalScreen } from "./screens/ResultModal";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer linking={routesConfig} theme={DarkTheme}>
      <Stack.Navigator>
        {routeList.map(
          (routeConfig: RouteConfig[], routeConfigIndex: number) => (
            <Stack.Group key={routeConfigIndex}>
              {routeConfig.map((route, routeIndex: number) => (
                <Stack.Screen
                  key={routeIndex}
                  name={route.name}
                  component={route.component}
                  options={route.options}
                />
              ))}
            </Stack.Group>
          )
        )}
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="ResultModal" component={ResultModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
