import { router } from "expo-router";
import { Pressable, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  function handleLogin() {
    // Later:
    // check email/password with your API

    router.replace("/home");
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Log in
      </Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
      />

      <Pressable onPress={handleLogin}>
        <Text>Log in</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/register")}>
        <Text>Create an account</Text>
      </Pressable>
    </SafeAreaView>
  );
}