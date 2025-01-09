import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MasterSvg from "../assets/svg/MasterSvg";
import ChipSvg from "../assets/svg/ChipSvg";

const debitcard = ({ handleModel, data,handleDelete }) => {
  // console.log(data?.item);

  return (
    <Pressable
      onPress={() => handleModel(data?.item)}
      onLongPress={() => handleDelete(data?.item?.id)}
      className="border border-primary/25 bg-gray-50  rounded-3xl overflow-hidden"
    >
      <View className="p-4">
        <Text className="text-xl font-Sora-Regular mb-4">Platinum</Text>
        <View className="flex-row items-center justify-between mb-6">
          {/* <View className="w-14 h-10 bg-amber-200 "></View> */}
          <ChipSvg />
          <Text className="font-Sora-SemiBold text-black text-base text-center grow-0 shrink me-1 bg-gray-50/[30%] px-2 py-0.5 rounded-lg">
            debit
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="shrink">
            <Text className="font-Sora-Medium text-black text-lg">
              {data?.item?.number}
            </Text>
            <Text className="font-Sora-Medium text-black text-xs uppercase">
              Valid thru
            </Text>
            <Text className="font-Sora-Medium text-black text-lg">
              {data?.item?.expiryDate}
            </Text>
          </View>
          <MasterSvg />
        </View>
        <Text className="font-Sora-Medium text-black text-lg line-clamp-1 capitalize mt-2">
          {data?.item?.name}
        </Text>
      </View>
      <Image
        source={require("../assets/images/mastercard.png")}
        className=" absolute -z-10 w-full h-full"
      />
    </Pressable>
  );
};

export default debitcard;
