import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./src/components/useState/useCounter";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome !!!</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
