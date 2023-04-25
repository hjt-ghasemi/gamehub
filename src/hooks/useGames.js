import httpService from "../services/httpService";
import { useInfiniteQuery, useQuery } from "react-query";
import useTileCreator from "./useTileCreator";
import { useContext } from "react";
import QueryContext from "../contexts/QueryContext";
import paramsComposer from "../services/paramsComposer";
import config from "../config.json";

export default function useGames() {
  const [query] = useContext(QueryContext);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [config.gamesKey, paramsComposer(query)],
    ({ pageParam }) => {
      if (pageParam) return httpService.get(pageParam.next, { baseURL: "" });
      return httpService.get("/games", {
        params: {
          ...paramsComposer(query),
        },
      });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.data.next) return undefined;
        return { next: lastPage.data.next };
      },
    }
  );

  const { tiledGames, cols } = useTileCreator(data?.pages);

  return {
    games: tiledGames,
    error,
    status,
    cols,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
