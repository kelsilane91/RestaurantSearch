import { Results } from "./Results";

export interface ResultsListProps {
  title: string;
  results: Results[];
}
export type RootStackParamList = {
  Results: { id: string; params?: any };
};
