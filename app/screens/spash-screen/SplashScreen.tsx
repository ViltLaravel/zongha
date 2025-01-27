import { Text, TouchableHighlight } from "react-native";
import { ImageBackground, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const SplashScreenImg = require("./assets/splash-screen.png");

export default function SplashScreen({ navigation }: { navigation: any }) {
  return (
    <ImageBackground source={SplashScreenImg} className="h-full pb-48">
      <View className="flex flex-col justify-end items-center h-full">
        <TouchableHighlight
          onPress={() => navigation.replace("Login")}
          className="bg-white p-4 w-full max-w-xs rounded-xl"
        >
          <View className="relative w-full">
            <Text className="text-center text-[#4B74E8] text-xl font-poppins font-semibold">
              Continue
            </Text>
            <View className="absolute right-0 ">
              <Ionicons name="arrow-forward-circle" size={28} color="#4B74E8" />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}
