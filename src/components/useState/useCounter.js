import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("render Counter", count);

  const incrementBy1 = () => {
    setCount(count + 1);
  };

  const decrementBy1 = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const incrementBy3 = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const decrementBy3 = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Increment + 1" onPress={incrementBy1} />
        <Button title="Decrement - 1 " onPress={decrementBy1} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Increment + 3" onPress={incrementBy3} />
        <Button title="Decrement - 3" onPress={decrementBy3} />
      </View>
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    width: "100%",
  },
  counterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    width: "100%",
  },
  counter: {
    fontSize: 50,
  },
});

export default Counter;
