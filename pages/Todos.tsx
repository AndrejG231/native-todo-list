import { Task } from "../components/Task"
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ScrollView,
  Keyboard,
} from "react-native"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { add } from "../store/todos"

const Todos = () => {
  const [input, setInput] = useState("")

  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(add(input))
    setInput("")
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* Tasks display */}
        <ScrollView style={styles.scrollWrapper}>
          <View style={styles.items}>
            {todos.map((task, index) => (
              <Task key={index}>{task}</Task>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Task input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTasksWrapper}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder={"Write a task"}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.addWrapper}>
            <View style={styles.addText}>
              <Text>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 170,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollWrapper: {
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 20,
  },
  writeTasksWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
})

export { Todos }
