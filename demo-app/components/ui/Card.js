import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
