import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../styles/Colors";

const ViewedUpdate = () => {
  return (
    <View style={styles.viewUpdateContainer}>
      <View style={styles.TextContentViewUpdate}>
        <Text style={styles.textTitleView}>Viewed Updates</Text>
        <Image
          style={styles.iconView}
          source={require("../../assets/images/icon_arrow_down_48.png")}
        />
      </View>

      <View style={styles.endViewUpdateLine}></View>
    </View>
  );
};

export default ViewedUpdate;

const styles = StyleSheet.create({
  viewUpdateContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Color.secondaryColor,
  },
  TextContentViewUpdate: {
    flexDirection: "row",
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
