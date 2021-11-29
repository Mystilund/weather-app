import React, { useEffect, useState } from "react";
import {  } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWeather } from "../../api/weather";
import { WeatherComponent } from "./WeatherComponent";

export const ResultModalScreen = ({
  route,
}: {
  route: { params: { lat: number; lon: number } };
}) => {
  const [isLoading, updateLoading] = useState(true);
  const [hasErrors, updateErrors] = useState(false);
  const [weather, updateWeather] = useState<null | Weather>(null);

  useEffect(() => {
    const { lat, lon } = route.params;

    getWeather(lat, lon)
      .then(updateWeather)
      .catch(() => {
        updateErrors(true);
      })
      .finally(() => {
        updateLoading(false);
      });
  }, [route.params.lat, route.params.lon]);

  if (isLoading || !weather) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  if (!isLoading && hasErrors) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WeatherComponent weather={weather} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
});
