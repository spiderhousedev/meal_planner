import { router } from "expo-router";
import { Pressable, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Create Account
      </Text>

      <TextInput placeholder="Name" />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
      />

      <Pressable onPress={() => router.replace("/home")}>
        <Text>Create account</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text>Back to login</Text>
      </Pressable>
    </SafeAreaView>
  );
}