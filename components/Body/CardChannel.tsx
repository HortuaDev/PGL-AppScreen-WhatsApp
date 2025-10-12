import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Color } from "../../styles/Colors";

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

const styles = StyleSheet.create({
  CardChannelContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    overflow: "hidden",
    height: 190,
    width: 150,
  },
  CardImageContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  CardImage: {
    height: 65,
    width: 65,
  },
  CardVerifiedIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  CardVerifiedIcon: {
    backgroundColor: Color.primaryColor,
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  CardNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  CardName: {
    fontSize: 20,
    color: Color.textSecondaryColor,
    fontWeight: "500",
  },
  CardButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  TextButton: {
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: Color.buttonPrimaryColor,
    color: Color.textSecondaryColor,
    borderRadius: 20,
    padding: 4,
  },
  CardImageRounded: {
    borderRadius: 50,
  },
});
