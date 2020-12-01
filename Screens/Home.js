import React, { useEffect, useState } from "react";

import { FlatList, View } from "react-native";
import styled from "styled-components";
import ListingItem from "./Components/Listing/ListingItems";

const ListingsWrapper = styled(View)`
  flex: 1;
  background-color: #f8f9f9;
  align-items: center;
  justify-content: center;
  color: #3ab750;
`;

const Listings = styled(FlatList)`
  width: 100%;
  padding: 5%;
  color: #3ab750;
`;

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    try {
      const data = await fetch(
        "https://my-json-server.typicode.com/PaulCroitoriu/Shopping-List/listings"
      );
      const dataJson = await data.json();

      if (dataJson) {
        setData(dataJson);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <ListingsWrapper>
      {!loading && !error && (
        <Listings
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListingItem item={item} navigation={navigation} />
          )}
        />
      )}
    </ListingsWrapper>
  );
};

export default Home;
