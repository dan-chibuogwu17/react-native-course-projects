import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  // we set the exclude here first so that the user's inputted number won't be guessed on first guess.
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }

  Alert.alert("This can cause an error", "No valid output", [
    { text: "I don hear", style: "cancel" },
  ]);
}
let maxBoundary = 100;
let minBoundary = 1;
// This is the Game Screen function
function GameScreen({ userNumber, gameIsOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const guessRoundsListLength = guessRounds.length;
  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOver(guessRoundsListLength);
    }
  }, [userNumber, currentGuess]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  function nextGuessHandler(direction) {
    // Remember that our random number generator only returns numbers between the min and max boundary with the minBoundary inclusive (excluding the max boundary an)
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Why you dey lie!", "Give me correct direction abeg.", [
        { text: "I don hear", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    if (minBoundary !== maxBoundary) {
      const newRandomNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newRandomNumber);
      setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/*outputting rounds info*/}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessRoundsListLength - itemData.index}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 10,
  },

  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
