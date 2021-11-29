import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { HomeRoutes } from "../screens/Home/routes";
import { NotFoundRoutes } from "../screens/NotFound/routes";

export const routesConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Home: "weather",
      ResultModal: "weather/:lat/:lon",
      NotFound: "*",
    },
  },
};

export const routeList = [
  HomeRoutes,
  NotFoundRoutes
]
