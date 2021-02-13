import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function TodoItem({ pressDelete, item }) {
  return (
    <TouchableOpacity onPress={() => pressDelete(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderColor: "orange",
  },
});
