import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  term: string;
  onTermChange: any;
  onTermSubmit: any;
}
export const SearchBar = ({ term, onTermChange, onTermSubmit }: Props) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={24} color="black" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
