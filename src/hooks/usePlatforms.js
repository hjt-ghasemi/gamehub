import httpService from "../services/httpService";
import { useQuery } from "react-query";

export default function usePlatforms() {
  const { data, error, isLoading } = useQuery("platformsData", () =>
    httpService.get("/platforms/lists/parents")
  );

  return { data, error, isLoading };
}
