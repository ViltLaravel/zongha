import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { signInUser } from "../../../action/signin-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { emailChanged, passwordChanged } from "./_redux/sign-in-slice";

export default function LoginScreen() {
  const state = useSelector((state: RootState) => state.signInState);
  const dispatch = useDispatch();

  const { login, authLoading } = useContext<any>(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await signInUser({
        email: state.email.value,
        password: state.password.value,
      });
      if (response.data.success) {
        login(response.data.token);
        dispatch(emailChanged(""));
        dispatch(passwordChanged(""));
      } else {
        Alert.alert("Login failed", "Please check your username and password.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  if (!login || authLoading === undefined) {
    return null;
  }

  return (
    <View style={styles.container}>
      {authLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Email"
            value={state.email.value}
            onChangeText={(value) => dispatch(emailChanged(value))}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={state.password.value}
            onChangeText={(value) => dispatch(passwordChanged(value))}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
