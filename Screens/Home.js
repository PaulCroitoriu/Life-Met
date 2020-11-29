import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Salut, Paul</Text>
    <Button
      onPress={() => navigation.navigate("Detail")}
      title="Go to Detail"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4B5C8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
