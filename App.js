import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import SearchFilter from "./components/SearchFilter";
import { useState } from "react";

const search = [
  {
    id: 0,
    name: "Junior",
  },
  {
    id: 1,
    name: "Senior",
  },
  {
    id: 2,
    name: "Lead",
  },
  {
    id: 3,
    name: "React Native",
  },
  {
    id: 4,
    name: "JavaScript",
  },
  {
    id: 5,
    name: "C#",
  },
];

export default function App() {
  const [input, setInput] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="#ddd" />
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
          placeholder="Search Item"
        />
      </View>
      <SearchFilter data={search} input={input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 65,
  },
  input: {
    borderWidth: 2,
    height: 50,
    borderColor: "#ddd",
    fontSize: 18,
    textAlign: "center",
  },
});
