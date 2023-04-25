import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import useTileCreator from "./useTileCreator";
import QueryContext from "../contexts/QueryContext";
import paramsComposer from "../services/paramsComposer";
import httpService from "../services/httpService";
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

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

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
