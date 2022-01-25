import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Business } from "../types/Business";

export default () => {
  const [results, setResults] = useState<Business[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york",
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
