import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.storyAvailableColor,
    borderRadius: 50,
    padding: 2,
  },
  borderSeparator: {
    borderRadius: 50,
    backgroundColor: Color.secondaryColor,
    padding: 2,
  },
  imageUser: {
    borderRadius: 50,
    height: 70,
    width: 70,
    backgroundColor: Color.secondaryColor,
    padding: 2,
  },
  infoContainer: { flex: 1, padding: 5 },
  textContainer: {
    flex: 1,
    color: Color.textSecondaryColor,
    textAlignVertical: "center",
    fontSize: 25,
  },
  hourContainer: {
    flex: 1,
    textAlignVertical: "center",
    fontSize: 20,
    color: Color.textPrimaryColor,
  },
});


export default styles;
