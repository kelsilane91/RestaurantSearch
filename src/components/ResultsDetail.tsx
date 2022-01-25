import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Business } from "../types/Business";

interface ResultsDetailProps {
  result: Business;
}
const ResultsDetail = ({ result }: ResultsDetailProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image}></Image>
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 250,
    borderRadius: 10,
    height: 120,
    marginBottom: 5,
  },
  container: {
    marginLeft: 10,
  },
});

export default ResultsDetail;
