import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute();
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: "Back",
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) !== -1
  );
  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
