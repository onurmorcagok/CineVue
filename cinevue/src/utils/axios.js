import axios from "axios";

const httpService = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
  }
);

export default httpService;
