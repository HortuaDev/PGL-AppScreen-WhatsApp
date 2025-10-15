import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import CarItemHeader from "./CarItemHeader";
import styles from "./HeaderStyles";

const HeaderComponent = () => {
  interface CardItem {
    id: number;
    image?: ImageSourcePropType;
    text?: string;
    notifications?: number;
  }

  const itemsInfo: CardItem[] = [
    { id: 1, image: require("../../assets/images/icon_group_64.png") },
    { id: 2, text: "Chats", notifications: 2 },
    { id: 3, text: "Updates" },
    { id: 4, text: "Calls" },
  ];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topPart}>
        <View style={styles.contentTile}>
          <Text style={styles.title}>WhatsApp</Text>
        </View>
        <View style={styles.contentIcons}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/icon_camera_48.png")}
          ></Image>
          <Image
            style={styles.icon}
            source={require("../../assets/images/icon_menu_48.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.buttonPart}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollViewHorizontalHeader}
        >
          {itemsInfo.map((item) => (
            <CarItemHeader
              key={item.id}
              image={item.image}
              text={item.text}
              notifications={item.notifications}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HeaderComponent;
