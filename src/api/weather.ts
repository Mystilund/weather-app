import { getData } from "../config/data";

export function getCitySuggestions(input: string): Promise<APISuggestion[]> {
  const data = getData()

  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      input
    )}&limit=5&appid=${data.API_KEY}`
  ).then((response) => response.json());
}

export function getWeather(lat: number, lon: number): Promise<Weather> {
  const data = getData()

  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${data.API_KEY}`
  ).then((response) => response.json());
}
