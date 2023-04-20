import httpService from "../services/httpService";
import { useQuery } from "react-query";

export default function usePlatforms() {
  const { data, error, isLoading } = useQuery("platformsData", () =>
    httpService.get("/platforms/lists/parents")
  );

  const platforms = data?.data.results || [];

  return { platforms, error, isLoading };
}
