import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Color.primaryColor,
    flex: 2,
    width: "100%",
  },

  topPart: { flex: 4, flexDirection: "row", width: "100%" },
  contentTile: { flex: 4, justifyContent: "center", alignItems: "flex-start" },
  title: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: Color.textPrimaryColor,
  },
  buttonPart: { flex: 2 },
  contentIcons: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: { height: 32, width: 32 },

  scrollViewHorizontalHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    paddingHorizontal: 15,
    width: "100%",
  },
});


export default styles;
