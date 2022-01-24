import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Results } from "../types/Results";

interface ResultsListProps {
  title: string,
  results: Results[]
}
const ResultsList = ({ title, results }: ResultsListProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
