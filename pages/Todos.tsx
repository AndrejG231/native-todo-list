import { Task } from "../components/Task"
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import React from "react"

const Todos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        {/* Tasks display */}
        <View style={styles.items}>
          <Task>Hello</Task>
          <Task>Do something</Task>
          <Task>Today</Task>
          <Task>Great</Task>
        </View>
      </View>

      {/* Task input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={styles.writeTasksWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} />
        <TouchableOpacity>
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
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
