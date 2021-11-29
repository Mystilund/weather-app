import { StyleSheet } from "react-native";

export const HomeTextInputStyle = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
});

export const HomeTitleStyle = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export const HomeSuggestionStyle = StyleSheet.create({
  text: {
    margin: 5,
  },
});

// -----------------
// |   Container   |
// -----------------

export const HomeContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomeSuggestionContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: '#333',
    width: 300,
  },
});

export const HomeSelectedSuggestionContainerStyle = StyleSheet.create({
  container: {
    padding: 10
  },
});

export const HomeButtonContainerStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
});
