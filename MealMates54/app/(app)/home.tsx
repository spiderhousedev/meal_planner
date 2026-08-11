import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        This Week
      </Text>

      <Text>Monday</Text>
      <Text>Chilli</Text>

      <Pressable onPress={() => router.push("/add_meal")}>
        <Text>Add Meal</Text>
      </Pressable>
    </SafeAreaView>
  );
}