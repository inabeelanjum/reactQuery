import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const RqSuperheroes = () => {
  const fetchh = () => {
    return axios.get("http://localhost:4000/superheroes1");
  };
  const { data, isLoading, isError, error } = useQuery(["heroes"], fetchh);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (data) {
    return (
      <>
        <h2>Super Heroes react query</h2>
        {data?.data.map((hero) => {
          return <div>{hero.name}</div>;
        })}
      </>
    );
  }
};
