import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ViewedUpdate = () => {
  return (
    <View style={styles.viewUpdateContainer}>
      <View style={styles.TextContentViewUpdate}>
        <Text style={styles.textTitleView}></Text>
      </View>
      <View style={styles.iconViewContainer}>
        <Image style={styles.iconView} />
      </View>
      <View style={styles.endViewUpdateLine}></View>
    </View>
  );
};

export default ViewedUpdate;

const styles = StyleSheet.create({
  viewUpdateContainer: {},
  TextContentViewUpdate: {},
  textTitleView: {},
  iconViewContainer: {},
  iconView: {},
  endViewUpdateLine: {},
});
