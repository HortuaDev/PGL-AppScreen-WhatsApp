import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import React from "react";

import styles from "./CardChennelStyles";

interface channelUser {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

interface CardChannelProps {
  user: channelUser;
}

const CardChannel = ({ user }: CardChannelProps) => {
  return (
    <View style={styles.CardChannelContainer}>
      <View style={styles.CardImageContainer}>
        <ImageBackground
          source={user.image}
          style={styles.CardImage}
          imageStyle={styles.CardImageRounded}
        >
          <View style={styles.CardVerifiedIconContainer}>
            <Image
              source={require("../../assets/images/icon_verified_48.png")}
              style={styles.CardVerifiedIcon}
            ></Image>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.CardNameContainer}>
        <Text style={styles.CardName}>{user.name}</Text>
      </View>
      <Pressable style={styles.CardButtonContainer}>
        <Text style={styles.TextButton}>Follow</Text>
      </Pressable>
    </View>
  );
};

export default CardChannel;
