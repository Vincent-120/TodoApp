import React, { useState } from "react";
import { StyleSheet, View, TextInput} from "react-native";
import RoundedButton from "./bouton";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = value => {
    setText(value);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
        />
        <RoundedButton onPress={pressHandler} title="add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});