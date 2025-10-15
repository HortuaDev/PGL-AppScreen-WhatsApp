import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";

const styles = StyleSheet.create({
  viewUpdateContainer: {
    flex: 1,
    backgroundColor: Color.secondaryColor,
  },
  TextContentViewUpdate: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  textTitleView: {
    flex: 1,
    color: Color.textPrimaryColor,
    fontSize: 20,
  },
  iconView: { height: 25, width: 25 },
  endViewUpdateLine: {
    flex: 1,
    height: 2,
    backgroundColor: Color.textPrimaryColor,
  },
});

export default styles;