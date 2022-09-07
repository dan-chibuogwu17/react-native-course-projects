import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import favoritesContext from "../store/context/FavoritesContext";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  // const { ids } = useContext(favoritesContext);
  const ids = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          You don't have any <Text style={styles.accented}>Favorites</Text> yet.
        </Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "white",
    fontSize: 17,
  },
  accented: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 20,
  },
});
