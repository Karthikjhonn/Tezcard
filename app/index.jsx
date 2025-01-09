import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
const index = () => {
  useEffect(()=>{
    setTimeout(() => {
      router.replace("/home");
    }, 2000);
  },[])
  return (
    <View className="bg-black flex-1">
      <Image
        source={require("../assets/images/ws.png")}
        className="object-cover h-fit w-full "
      />
      <View className="mx-5 absolute bottom-20">
        <Text className="text-halfWhite font-Sora-SemiBold text-5xl py-2">
          Stay in charge of your
        </Text>
        <Text className="text-red-500 font-Sora-SemiBold text-5xl">
          cards securely
        </Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default index;
