import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Settings = ({ navigation }) => (
  <View>
    <Text>Settings</Text>
    <Button onPress={() => navigation.navigate("Home")} title="Home" />
  </View>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Settings;
