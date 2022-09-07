import { useContext, useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { Screen } from "react-native-screens";
import IconButton from "../components/IconButton";
import FavoritesContext from "../store/context/FavoritesContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    id,
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
  } = selectedMeal;

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color={mealIsFavorite ? "yellow" : "white"}
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
      title: "About the meal",
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    marginBottom: 50,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
