import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 30,
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "orange",
    fontSize: 35,
    fontWeight: "bold",
  },
});
