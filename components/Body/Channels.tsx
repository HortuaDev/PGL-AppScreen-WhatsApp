import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";

import styles from "./ChannelsStyles";
import CardChannel from "./CardChannel";

interface channelUser {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

interface listChannelUsers {
  listUser: channelUser[];
}

const Channels = ({ listUser }: listChannelUsers) => {
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
          {listUser.map((user) => (
            <CardChannel key={user.id} user={user} />
          ))}
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
