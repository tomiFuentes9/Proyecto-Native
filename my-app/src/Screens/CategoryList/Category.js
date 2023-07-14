import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "../../Components/Card";
import React from "react";

export const Category = ({ item, setCategory, changeHeader }) => {
  const handleSetCategory = (category) => {
    setCategory(category);
    changeHeader(category);
  };

  return (
    <Pressable onPress={() => handleSetCategory(item)}>
      <Card>
        <Text style={styles.categoryText}>{item}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 15,
    color: "black",
  },
});
