import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  // const navigation = useNavigation();

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#00000020" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    // padding: 20,
    margin: 10,
    height: 150,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    // overflow: Platform.select({ ios: "visible", android: "hidden" }),
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    backgroundColor: "#00000020",
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
