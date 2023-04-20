import httpService from "../services/httpService";
import { useQuery } from "react-query";

export default function useGenres() {
  const { data, error, isLoading } = useQuery("genres", () =>
    httpService.get("/genres")
  );

  const genres = data?.data?.results;

  return { genres, error, isLoading };
}
