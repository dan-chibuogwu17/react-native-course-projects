import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import meal from "../../models/meal";
import MealDetails from "../MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  // This is the major jsx returned
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#00000010" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? { backgroundColor: "#00000010", opacity: 0.7 } : null,
        ]}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  button: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
