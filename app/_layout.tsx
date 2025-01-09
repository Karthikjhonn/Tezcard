import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import {FontProvider} from "../context/FontContext"


export default function RootLayout() {
  

  return (
    <FontProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </FontProvider>
  );
}
