import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  WeatherListStyle,
  WeatherSubTitleStyle,
  WeatherTextBoldStyle,
  WeatherTitleStyle,
} from "./style";

const meterBySecondToKmByHourMultiplier = (val: number) =>
  Math.round(val * 3.6);
const kelvinToCelsius = (val: number) => Math.round(val - 273.15);

export const WeatherComponent = ({ weather }: { weather: Weather }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={WeatherTitleStyle.text}>
          {weather.name} - {weather.sys.country} ({weather.coord.lat};
          {weather.coord.lon}))
        </Text>
      </View>

      {/* Current Weather */}
      <Text style={WeatherSubTitleStyle.text}>Current weather :</Text>
      {weather.weather.map((currentWeather, index) =>
        list(currentWeather.main, currentWeather.description, index)
      )}
      {/* Wind & misc info */}
      <Text style={WeatherSubTitleStyle.text}>
        Miscellaneous Informations :
      </Text>
      <View>
        {list(
          "Wind",
          `${meterBySecondToKmByHourMultiplier(weather.wind.speed)}km/h`
        )}
        {list("Humidity", `${weather.main.humidity}%`)}
        {list("Pressure", `${weather.main.pressure}hPa`)}
        {list(
          "Minimum Temperature",
          `${kelvinToCelsius(weather.main.temp_min)}°C`
        )}
        {list(
          "Maximum Temperature",
          `${kelvinToCelsius(weather.main.temp_max)}°C`
        )}
        {list("Clouds", `${weather.clouds.all}%`)}
      </View>
      {weather.rain ? displayRainInfo(weather.rain) : null}
      {weather.snow ? displaySnowInfo(weather.snow) : null}
    </View>
  );
};

function list(label: string, value: string, index?: React.Key) {
  return (
    <View style={WeatherListStyle.container} key={index}>
      <Text style={WeatherTextBoldStyle.text}>{label} : </Text>
      <Text>{value}</Text>
    </View>
  );
}

function displayRainInfo(rain: Weather["rain"]) {
  return (
    <View>
      <Text style={WeatherSubTitleStyle.text}>Rain :</Text>
      <Text>
        It's raining since at least {rain && rain["3h"] ? "3 hours" : "1 hour"}
      </Text>
      {rain && rain["1h"] ? (
        <Text>Rain for the last 1 hour : {rain["1h"]}mm</Text>
      ) : null}
      {rain && rain["3h"] ? (
        <Text>Rain for the last 3 hour : {rain["3h"]}mm</Text>
      ) : null}
    </View>
  );
}

function displaySnowInfo(snow: Weather["snow"]) {
  return (
    <View>
      <Text style={WeatherSubTitleStyle.text}>Snow :</Text>
      <Text>
        It's snowing since at least {snow && snow["3h"] ? "3 hours" : "1 hour"}
      </Text>
      {snow && snow["1h"] ? (
        <Text>Snow for the last 1 hour : {snow["1h"]}mm</Text>
      ) : null}
      {snow && snow["3h"] ? (
        <Text>Snow for the last 3 hour : {snow["3h"]}mm</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
