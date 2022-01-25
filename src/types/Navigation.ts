import { Business } from "./Business";

export interface ResultsListProps {
  title: string;
  results: Business[];
}
export type RootStackParamList = {
  Results: { id: string; params?: any };
};
