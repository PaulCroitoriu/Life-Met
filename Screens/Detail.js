import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Detail = ({ navigation }) => (
  <View style={styles.container}>
    <Text>This is Detail Page</Text>
    <Button onPress={() => navigation.goBack()} title="Home" />
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

export default Detail;
