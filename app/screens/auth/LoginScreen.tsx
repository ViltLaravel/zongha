import React, { useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { signInUser } from "../../../action/signin-action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  emailChanged,
  isLoadingChanged,
  passwordChanged,
} from "./_redux/sign-in-slice";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const state = useSelector((state: RootState) => state.signInState);
  const dispatch = useDispatch();

  const { login, authLoading } = useContext<any>(AuthContext);

  const handleLogin = async () => {
    dispatch(isLoadingChanged(true));
    try {
      const response = await signInUser({
        email: state.email.value,
        password: state.password.value,
      });
      if (response.data.success) {
        dispatch(isLoadingChanged(false));
        login(response.data.token);
        dispatch(emailChanged(""));
        dispatch(passwordChanged(""));
        navigation.navigate("Dashboard");
      } else {
        dispatch(isLoadingChanged(false));
        Alert.alert("Login failed", "Please check your username and password.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  if (!login || authLoading === undefined) {
    return null;
  }

  const navigation: any = useNavigation();

  const handleGotologin = () => {
    navigation.navigate("Splash");
  };

  return (
    <View className="bg-[#F8F9FA] pt-10 h-full w-full">
      {authLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View className="p-8">
          <View className="flex items-center justify-center flex-row p-4">
            <TouchableOpacity
              onPress={() => handleGotologin()}
              className="left-0"
            >
              <View className="bg-slate-200 p-2 rounded-lg">
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View className="w-full">
              <Text className="font-poppins_bold text-4xl w-full text-start pl-[75px]">
                Login
              </Text>
            </View>
          </View>
          <View className="bg-white mt-36 p-8 rounded-xl">
            <View className="p-2 flex gap-3 justify-center items-center">
              <Text className="font-poppins_bold text-2xl text-[#4B74E8]">
                Welcome Back!
              </Text>
              <Text className="font-poppins_regular text-slate-400 text-base">
                Sign in to continue
              </Text>
            </View>
            <View className="flex flex-col w-full gap-3 mt-4">
              <TextInput
                placeholder="Email"
                className="w-full flex-1 font-poppins_regular"
                value={state.email.value}
                onChangeText={(value) => dispatch(emailChanged(value))}
              />
              <TextInput
                placeholder="Password"
                className="w-full flex-1 font-poppins_regular"
                value={state.password.value}
                onChangeText={(value) => dispatch(passwordChanged(value))}
                secureTextEntry
              />
            </View>
            <View className="mt-10">
              <TouchableOpacity
                className="bg-[#4B74E8] rounded-xl p-4"
                onPress={handleLogin}
              >
                {!state.isLoading ? (
                  <Text className="text-white text-xl font-poppins_regular text-center">
                    Login
                  </Text>
                ) : (
                  <ActivityIndicator size="small" color="white" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
