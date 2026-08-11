import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: "700" }}>
        MealMates
      </Text>

      <Pressable onPress={() => router.push("/login")}>
        <Text>Log in</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/register")}>
        <Text>Create account</Text>
      </Pressable>
    </SafeAreaView>
  );
}