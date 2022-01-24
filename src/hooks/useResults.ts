import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Results } from "../types/Results";

export default () => {
  const [results, setResults] = useState<Results[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const searchApi = async (searchTerm: string) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("tacos");
  }, []);

  return [searchApi as any, results, errorMessage];
};