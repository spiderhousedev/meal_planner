import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text>Home Screen</Text>

      <Link href="/second">
        Go to second screen
      </Link>
    </SafeAreaView>
  );
}