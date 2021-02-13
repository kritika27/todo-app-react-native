import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1", complete: false },
    { text: "Learn javaScript", key: "2", complete: false },
    { text: "Go to market", key: "3", complete: false },
  ]);

  const pressDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 1) {
      setText("");
      setTodos((prevTodos) => {
        return [{ text, key: Math.random() }, ...prevTodos];
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo
            submitHandler={submitHandler}
            text={text}
            setText={setText}
          />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressDelete={pressDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#013220",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
