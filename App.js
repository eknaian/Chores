import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredChoreText, setEnteredChoreText] = useState("");
  const [chores, setChores] = useState([]);

  const inputChangeHandler = (enteredChoreText) => {
    setEnteredChoreText(enteredChoreText);
  };

  const addChoreHandler = () => {
    setChores((currentChores) => [...chores, enteredChoreText]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.chore}>
        <Text>Chores</Text>
      </View>
      <View style={styles.addChore}>
        <TextInput
          style={styles.textInput}
          placeholder="Create a new chore"
          onChangeText={inputChangeHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Add chore"
            onPress={addChoreHandler}
          />
        </View>
      </View>
      <View style={styles.choresContainer}>
        {chores.map((chore) => (
          <Text key={chore}>{chore}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  chore: {
    flex: 1,
    alignItems: "center",
  },
  addChore: {
    flex: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    padding: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    paddingHorizontal: 10,
  },
  choresContainer: {
    flex: 4,
  },
});
