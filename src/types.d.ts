type RootStackParamList = {
  Home: undefined;
  ResultModal: undefined;
  NotFound: undefined;
};

type Nav<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

type RouteConfig = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

type APISuggestion = {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
};

// https://openweathermap.org/current#:~:text=View%22%2C%0A%20%20%22cod%22%3A%20200%0A%20%20%7D-,Fields%20in%20API%20response,-coord
type Weather = {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
