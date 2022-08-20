import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchh = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const useFetchData = (jeet) => {
  return useQuery(["heroes"], fetchh, {
    enabled: false,
    onSuccess: jeet(),
  });
};
export default useFetchData;
