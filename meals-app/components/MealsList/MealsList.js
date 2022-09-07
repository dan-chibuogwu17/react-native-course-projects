import MealItem from "./MealItem";
import { MEALS } from "../../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
