import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { Card } from "./Card";

export const Product = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStylesCard}>
      <Text>{item.title}</Text>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
  },
});
