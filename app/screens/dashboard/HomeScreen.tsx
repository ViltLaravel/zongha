import React, { useContext } from "react";
import {
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
const Avatar = require("./assets/avatar.png");

export default function HomeScreen() {
  const { logout, authLoading } = useContext<any>(AuthContext);
  const navigation: any = useNavigation();
  const handleLogout = () => {
    if (!logout || authLoading === undefined) {
      return null;
    } else {
      navigation.navigate("Splash");
    }
  };

  return (
    <View className="bg-[#F8F9FA] h-full w-full pt-14 px-4">
      {authLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View className="w-full flex flex-row justify-between py-2 items-center">
            <View className="flex-1">
              <Text className="font-poppins_bold text-xl">Welcome Back,</Text>
              <Text className="font-poppins_bold text-lg">Nicole!</Text>
            </View>
            <View className="flex-1 flex items-end justify-end">
              <Image
                className="h-16 w-16 rounded-full border-2 border-slate-400"
                source={Avatar}
                alt="avatar-img"
              />
            </View>
          </View>
          <View>
            <Button title="Logout" onPress={() => handleLogout()} />
          </View>
        </>
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
