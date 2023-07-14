import { Main } from "./src/Screens/Main";
import { Header } from "./src/Components/Header/Header";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { ItemListCategory } from "./src/Screens/ItemList/ItemListCategory";

export default function App() {
  const [actualCategory, setActualCategory] = useState("");
  const [actualHeader, setActualHeader] = useState("Products");

  const [fontsLoaded] = useFonts({
    inter: require("./src/Assets/Fonts/inter/Inter-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleChangeHeader = (text) => {
    setActualHeader(text);
  };

  return (
    <View style={styles.home}>
      <Header text={actualHeader} />
      {!actualCategory ? (
        <Main
          setCategory={setActualCategory}
          changeHeader={handleChangeHeader}
        />
      ) : (
        <ItemListCategory
          category={actualCategory}
          setCategory={setActualCategory}
          changeHeader={handleChangeHeader}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
