import { View, Text } from 'react-native'
import React from 'react'
import "../global.css"
const index = () => {
  return (
    <View className="p-5"> 
      <Text className="text-red-500 bg-blue-50 text-3xl font-Space-Mono">index</Text>
      <Text className="text-red-500 bg-blue-50 text-3xl font-Sora-Light">index</Text>
      <Text className="text-red-500 bg-blue-50 text-3xl font-Sora-Regular">index</Text>
      <Text className="text-red-500 bg-blue-50 text-3xl font-Sora-Medium">index</Text>
      <Text className="text-red-500 bg-blue-50 text-3xl font-Sora-SemiBold">index</Text>
      <Text className="text-xl font-bold text-blue-600 font-Sora-Light">
        Welcome to NativeWind! test
      </Text>
    </View>
  )
}

export default index