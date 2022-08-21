import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
export const RqSuperheroes = () => {
  const jeet = () => {
    console.log("success query");
  };
  const fetchh = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const fetchhmore = () => {
    return axios.get("http://localhost:4000/friends");
  };
  const heroes = useQuery(["heroes"], fetchh, {
    enabled: false,
    onSuccess: jeet(),
  });
  const friends = useQuery(["friends"], fetchhmore, {
    enabled: false,
    onSuccess: jeet(),
  });

  if (heroes.isFetching) {
    return <h1>loading...</h1>;
  }
  if (heroes.isError) {
    return <h1>{heroes.error.message}</h1>;
  }

  if (friends.isFetching) {
    return <h1>loading...</h1>;
  }
  if (friends.isError) {
    return <h1>{heroes.error.message}</h1>;
  }

  return (
    <>
      <h2>Super Heroes react query</h2>
      {heroes.data?.data.map((hero) => {
        return (
          <Link to={`/Hero/${hero.id}`}>
            <div key={hero.id}>{hero.name}</div>
          </Link>
        );
      })}
      <button onClick={heroes.refetch}>heroes </button>

      <h2>Super Heroes react query</h2>
      {friends.data?.data.map((fri) => {
        return (
          <Link to={`/Hero/${fri.id}`}>
            <div key={fri.id}>{fri.name}</div>
          </Link>
        );
      })}
      <button onClick={friends.refetch}>heroes </button>
    </>
  );
};
