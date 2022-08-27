import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/color";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    // fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 6, android: 2 }),
    borderWidth: 2,
    borderColor: Colors.primary800,
    paddingHorizontal: 12,
    paddingVertical: 2,
    maxWidth: "90%",
    // width: 300,
  },
});
