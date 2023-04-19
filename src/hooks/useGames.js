import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { useQuery } from "react-query";
import useTileCreator from "./useTileCreator";

export default function useGames() {
  const { data, error, isLoading, isFetching } = useQuery("gamesData", () =>
    httpService.get("/games")
  );
  const { tiledGames, cols } = useTileCreator(data?.data?.results);
  console.log("tile in games hook: ", tiledGames);
  return { games: tiledGames, error, isLoading, isFetching, cols };
}
