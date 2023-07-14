import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { CategoryList } from "./CategoryList/CategoryList";

export const Main = ({ setCategory, changeHeader }) => {
  return (
    <View style={styles.container}>
      <CategoryList setCategory={setCategory} changeHeader={changeHeader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    alignItems: "center",
    backgroundColor: "darksalmon",
  },
});
