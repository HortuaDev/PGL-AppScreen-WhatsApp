import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CardChannel from "./CardChannel";
import { Color } from "../../styles/Colors";

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
            Stay updated on topics that matter to you. Find channels to follow
            below.
          </Text>
        </View>
      </View>
      <View style={styles.listChannelsContainer}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.listChannels}
        >
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
          <CardChannel />
        </ScrollView>
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
  channelContainer: {
    flex: 1,
    backgroundColor: Color.secondaryColor,
  },
  channelInfo: { flex: 1, paddingHorizontal: 10 },
  titleIconContainer: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleChannel: {
    flex: 1,
    color: Color.textSecondaryColor,
    fontWeight: "500",
    fontSize: 30,
  },
  iconChannel: {
    height: 20,
    width: 20,
  },
  descriptionChannelContainer: {
    marginTop: 13,
  },
  descriptionChannel: {
    color: Color.textPrimaryColor,
    fontSize: 20,
  },
  listChannelsContainer: { marginVertical: 20 },
  listChannels: {
    padding: 10,
    gap: 15,
  },
  buttonsContainer: { paddingHorizontal: 10, height: 100 },
  buttonChannel: {
    height: 55,
    width: 200,
    borderRadius: 50,
    backgroundColor: Color.buttonSecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonChannel: {
    fontSize: 22,
    fontWeight: "500",
    color: Color.textThirdColor,
  },
});
