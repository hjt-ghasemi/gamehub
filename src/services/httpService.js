import axios from "axios";

const httpService = axios.create({
  params: {
    key: "e3276687bd4347b394b821f9eb3aa594",
  },
  baseURL: "https://api.rawg.io/api",
});

export default httpService;
