import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color.js";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: Colors.primary800,
    paddingHorizontal: 12,
    paddingVertical: 2
  },
});
