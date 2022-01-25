import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const [result, setResult] = useState({});
  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    console.log("respon", response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  return (
    <View>
      <Text>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    marginLeft: 10,
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
