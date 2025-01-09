import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NotFoundScreen() {
  const  goToHome = ()=>{
    router.replace("/");
  }
  return (
    <View className="flex-1 justify-center items-center p-5">
      <Text>Not Found!</Text>
      <Button title="back to home" onPress={goToHome}/>
    </View>
  );
}
