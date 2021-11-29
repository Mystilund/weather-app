import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { loadEnv } from './src/config/data';
import Navigation from './src/Navigation';

export default function App() {
  loadEnv();

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
