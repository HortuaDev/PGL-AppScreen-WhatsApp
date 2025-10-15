import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./ViewedUpdateStyles";

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
