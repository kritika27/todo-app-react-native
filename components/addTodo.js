import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler, text, setText }) {
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter the task..."
        placeholderTextColor="#fff"
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="orange"
        onPress={() => submitHandler(text)}
        title="add task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    color: "#fff",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
