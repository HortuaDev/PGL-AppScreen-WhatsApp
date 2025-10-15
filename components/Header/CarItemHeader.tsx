import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import React from "react";
import styles from "./CardItemHeaderStyles";
import { Color } from "../../styles/Colors";

interface CardItem {
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  text?: string;
  notifications?: number;
}

const CarItemHeader = (props: CardItem) => {
  const { icon, text, notifications } = props;

  return (
    <View style={styles.cardItemContainer}>
      {icon && (
        <FontAwesome name={icon} size={30} color={Color.textPrimaryColor} />
      )}
      <View style={styles.textContainerCard}>
        {text && <Text style={styles.cardText}>{text}</Text>}
        {notifications !== undefined && (
          <Text style={styles.cardNotification}>{notifications}</Text>
        )}
      </View>
    </View>
  );
};

export default CarItemHeader;
