import { router } from "expo-router";
import { Pressable, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddMealScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Add Meal
      </Text>

      <TextInput placeholder="Meal name" />

      <TextInput placeholder="Recipe" multiline />

      <TextInput placeholder="How many days will it last?" />

      <Pressable onPress={() => router.back()}>
        <Text>Save Meal</Text>
      </Pressable>
    </SafeAreaView>
  );
}