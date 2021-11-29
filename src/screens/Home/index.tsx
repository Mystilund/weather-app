import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { getCitySuggestions } from "../../api/weather";
import {
  HomeTitleStyle,
  HomeTextInputStyle,
  HomeSuggestionStyle,
  HomeContainerStyle,
  HomeSuggestionContainerStyle,
  HomeButtonContainerStyle,
  HomeSelectedSuggestionContainerStyle,
} from "./style";

export const HomeScreen = ({ navigation }: { navigation: Nav<"Home"> }) => {
  const [selectedSuggestion, updateSelectedSuggestion] =
    useState<APISuggestion | null>(null);
  const [city, updateCity] = useState("");
  const [suggestions, updateSuggestions] = useState<APISuggestion[]>([]);

  useEffect(() => {
    if (city.length > 3) {
      getCitySuggestions(city)
        .then((suggestions) => {
          updateSuggestions(suggestions);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateSuggestions([]);
    }
  }, [city]);

  // Callbacks
  const onButtonPressed = () => {
    if (selectedSuggestion) {
      navigation.navigate("ResultModal", {
        lat: selectedSuggestion.lat,
        lon: selectedSuggestion.lon,
      });
    }
  };
  const onSearchFieldUpdated = (city: string) => {
    updateCity(city);
    updateSelectedSuggestion(null);
  };
  const onSuggestionPressed = (suggestion: APISuggestion) => {
    updateSelectedSuggestion(suggestion);
    updateSuggestions([]);
  };

  //
  function displaySuggestions() {
    if (suggestions.length) {
      return (
        <View style={HomeSuggestionContainerStyle.container}>
          {suggestions.map((suggestion, index) => (
            <Text
              style={HomeSuggestionStyle.text}
              key={index}
              onPress={() => onSuggestionPressed(suggestion)}
            >
              {suggestion.name} - {suggestion.country} ({suggestion.lat};
              {suggestion.lon})
            </Text>
          ))}
        </View>
      );
    }

    return null;
  }

  function displaySelectedSuggestion() {
    if (selectedSuggestion) {
      return (
        <View style={HomeSelectedSuggestionContainerStyle.container}>
          <Text style={HomeSuggestionStyle.text}>
            Selected city : {selectedSuggestion.name} -{" "}
            {selectedSuggestion.country} ({selectedSuggestion.lat};
            {selectedSuggestion.lon})
          </Text>
        </View>
      );
    }

    return null;
  }

  return (
    <View style={HomeContainerStyle.container}>
      <Text style={HomeTitleStyle.text}>Find the weather of your city !</Text>
      <TextInput
        onChangeText={onSearchFieldUpdated}
        value={city}
        style={HomeTextInputStyle.input}
      />
      {displaySuggestions()}
      {displaySelectedSuggestion()}
      <View style={HomeButtonContainerStyle.container}>
        <Button
          onPress={onButtonPressed}
          title="See Result"
          color={ selectedSuggestion ? "#CC3333" : "#D57E7E" }
          accessibilityLabel="See result"
        />
      </View>
    </View>
  );
};
