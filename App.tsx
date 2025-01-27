import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./app/context/AuthContext";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";
import "./global.css";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
}
