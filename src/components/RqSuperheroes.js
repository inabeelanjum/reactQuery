import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const RqSuperheroes = () => {
  const jeet = () => {
    console.log("success query");
  };
  const fetchh = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["heroes"],
    fetchh,
    {
      enabled: false,
      onSuccess: jeet(),
    }
  );
  if (isFetching) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2>Super Heroes react query</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
      <button onClick={refetch}>heroes </button>
    </>
  );
};
