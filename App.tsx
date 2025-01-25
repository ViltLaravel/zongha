import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./app/context/AuthContext";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </AuthProvider>
  );
}
