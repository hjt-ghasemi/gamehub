import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { useQuery } from "react-query";
import useTileCreator from "./useTileCreator";

export default function useGames() {
  const { data, error, isLoading, isFetching } = useQuery("gamesData", () =>
    httpService.get("/games")
  );
  const tailedGames = useTileCreator(data?.data?.results);

  return { games: tailedGames, error, isLoading, isFetching };
}
