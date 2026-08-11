import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "hsla(66, 100%, 96%, 0.83)",
    padding: 20,
  },

  container: {
    flex: 1,
    width: "100%",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});