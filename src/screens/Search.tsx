import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import { SearchBar } from "../components/SearchBar";
import useResults from "../hooks/useResults";
import { Business } from "../types/Business";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price: string) => {
    return (results as Business[]).filter((result: Business) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.text}>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          title="Must Be Wealthy"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
});

export default SearchScreen;
