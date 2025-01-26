import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./app/context/AuthContext";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
}
