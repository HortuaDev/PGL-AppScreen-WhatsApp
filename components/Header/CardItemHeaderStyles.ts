import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";

const styles = StyleSheet.create({
cardItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    justifyContent: "center",
  },
  textContainerCard: {
    flexDirection: "row",
  },
  cardText: { fontSize: 25, color: Color.textPrimaryColor },
  cardNotification: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.primaryColor,
    marginLeft: 6,
    textAlignVertical: "center",
    alignItems: "center",
    backgroundColor: Color.textPrimaryColor,
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
});


export default styles;
