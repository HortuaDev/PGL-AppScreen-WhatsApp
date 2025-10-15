import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./ViewedUpdateStyles";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../../styles/Colors";

const ViewedUpdate = () => {
  return (
    <View style={styles.viewUpdateContainer}>
      <View style={styles.TextContentViewUpdate}>
        <Text style={styles.textTitleView}>Viewed Updates</Text>

        <FontAwesome
          name="arrow-circle-down"
          size={25}
          color={Color.textPrimaryColor}
        />
      </View>

      <View style={styles.endViewUpdateLine}></View>
    </View>
  );
};

export default ViewedUpdate;
