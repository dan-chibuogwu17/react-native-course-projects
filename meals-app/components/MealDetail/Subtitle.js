import { Text, View, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#7e8fbb",
    fontSize: 18,

    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#7e8fbb",
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
  },
});
