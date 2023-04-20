import httpService from "../services/httpService";
import { useQuery } from "react-query";
import useTileCreator from "./useTileCreator";
import { useContext } from "react";
import QueryContext from "../contexts/QueryContext";
import paramsComposer from "../services/paramsComposer";
import config from "../config.json";

export default function useGames() {
  const [query] = useContext(QueryContext);
  const { data, error, isLoading, isFetching } = useQuery(
    [config.gamesKey, paramsComposer(query)],
    () =>
      httpService.get("/games", {
        params: paramsComposer(query),
      })
  );

  const { tiledGames, cols } = useTileCreator(data?.data?.results);
  return { games: tiledGames, error, isLoading, isFetching, cols };
}
