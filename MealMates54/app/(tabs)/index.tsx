import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/styles/globalStyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <Text style={globalStyles.title}>MealMates</Text>
      <Text>Welcome to MealMates!</Text>
    </SafeAreaView>
  );
}