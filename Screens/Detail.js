import React from "react";
import { Text, View } from "react-native";
import ListingDetail from "./Components/Listing/ListingDetail.ios";

const Detail = ({ navigation }) => {
  const item = navigation.getParam("item", {});

  return <ListingDetail item={item} />;
};

export default Detail;
