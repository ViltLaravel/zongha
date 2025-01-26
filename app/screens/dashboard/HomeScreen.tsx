import React, { useContext } from "react";
import { View, Button, ActivityIndicator, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function HomeScreen() {
  const { logout, authLoading } = useContext<any>(AuthContext);

  if (!logout || authLoading === undefined) {
    return null;
  }

  return (
    <View style={styles.container}>
      {authLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Logout" onPress={logout} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
