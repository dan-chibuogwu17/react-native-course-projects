import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.courseGoalsItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  courseGoalsItem: {
    color: "white",
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    fontSize: 18,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
