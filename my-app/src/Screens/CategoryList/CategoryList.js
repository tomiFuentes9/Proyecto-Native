import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { Category } from "./Category";
import categories from "../../Data/categories.json";

export const CategoryList = ({ setCategory, changeHeader }) => {
  return (
    <View style={styles.categoryView}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category
            item={item}
            setCategory={setCategory}
            changeHeader={changeHeader}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    flex: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 5,
  },
});
