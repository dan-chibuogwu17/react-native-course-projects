import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../constants/color";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButtons";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hightlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 28,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
  },
});
