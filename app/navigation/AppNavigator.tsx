import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import SplashScreen from "../screens/spash-screen/SplashScreen";

type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
  Splash: undefined;
};

type DashboardStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardNavigator = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    {/* <DashboardStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "Profile" }}
    /> */}
  </DashboardStack.Navigator>
);

export default function AppNavigator() {
  const { user, isLoading } = useContext<any>(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {user ? (
          <Stack.Screen
            name="Dashboard"
            component={DashboardNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
