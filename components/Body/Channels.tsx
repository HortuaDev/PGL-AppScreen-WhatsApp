import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Channels = () => {
  return (
    <View style={styles.channelContainer}>
      <View style={styles.channelInfo}>
        <View style={styles.titleIconContainer}>
          <Text style={styles.titleChannel}>Channels</Text>
          <Image
            source={require("../../assets/images/icon_add_48.png")}
            style={styles.iconChannel}
          />
        </View>
        <View style={styles.descriptionChannelContainer}>
          <Text style={styles.descriptionChannel}>
            Stay updated on topics that matter to you. Find channels to follw
            below.
          </Text>
        </View>
      </View>
      <View style={styles.listChannelsContainer}>
        <ScrollView style={styles.listChannels}></ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttonChannel}>
          <Text style={styles.textButtonChannel}>Find channels</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Channels;

const styles = StyleSheet.create({
  channelContainer: { flex: 1, backgroundColor: "green" },
  channelInfo: { flex: 1 },
  titleIconContainer: {
    marginTop: 25,
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleChannel: {
    flex: 1,
    backgroundColor: "yellow",
    fontSize: 30,
  },
  iconChannel: {
    backgroundColor: "red",
    height: 25,
    width: 25,
  },
  descriptionChannelContainer: {
    marginTop: 13,
  },
  descriptionChannel: { fontSize: 20 },
  listChannelsContainer: { marginVertical: 20 },
  listChannels: { height: 200, backgroundColor: "red" },
  buttonsContainer: { height: 100 },
  buttonChannel: {
    height: 55,
    width: 200,
    borderRadius: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonChannel: {
    fontSize: 22,
    fontWeight: "500",
  },
});
