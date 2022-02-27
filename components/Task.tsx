import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

type Props = {
  children: string
}

const Task = ({ children }: Props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    borderRadius: 3,
    opacity: 0.4,
    marginRight: 15,
  },
  itemRight: {},
  itemText: {},
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55bcf6",
  },
})

export { Task }
