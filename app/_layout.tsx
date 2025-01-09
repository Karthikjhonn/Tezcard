import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { FontProvider } from "../context/FontContext";
import "../global.css";
import { Provider } from "react-redux";
import store from "../store/store"
export default function RootLayout() {
  return (
    <Provider store={store}>
      <FontProvider>
        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </FontProvider>
    </Provider>
  );
}
