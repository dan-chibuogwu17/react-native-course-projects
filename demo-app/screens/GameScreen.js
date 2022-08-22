import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let maxBoundary = 100;
let minBoundary = 1;

function GameScreen({ userNumber, gameIsOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOver();
    }
  }, [userNumber, currentGuess]);

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
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
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
              -
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
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
});
