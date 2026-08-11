import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SecondScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text>Second Screen</Text>

      <Pressable onPress={() => router.back()}>
        <Text>Go back</Text>
      </Pressable>
    </SafeAreaView>
  );
}