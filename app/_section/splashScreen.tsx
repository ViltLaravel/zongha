import { Image, View } from "react-native";
const SplashLogo = require("../../assets/logo/logo.png");

export default function SplashScreen() {
  return (
    <View className="flex justify-center items-center h-full">
      <Image source={SplashLogo} className="object-contain h-52 w-52" />
    </View>
  );
}
