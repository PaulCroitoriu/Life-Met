import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Settings</Text>
    <Button onPress={() => navigation.navigate("Home")} title="Home" />
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

export default Settings;
