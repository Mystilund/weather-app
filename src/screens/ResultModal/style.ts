import { StyleSheet } from "react-native";

export const WeatherTitleStyle = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});
export const WeatherSubTitleStyle = StyleSheet.create({
  text: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    textDecorationLine: 'underline'
  },
});
export const WeatherTextBoldStyle = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  },
});

// -----------------
// |   Container   |
// -----------------

export const WeatherListStyle = StyleSheet.create({
  container: {
    paddingLeft: 15,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "row"
  },
});
