import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Hero = () => {
  let { userId } = useParams();
  console.log(userId);

  const fetchh = (userId) => {
    const abc = axios.get(`http://localhost:4000/superheroes/${userId}`);
    return abc;
  };
  const { data, isLoading, isError, error } = useQuery(["hero", userId], () =>
    fetchh(userId)
  );
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (data) {
    return (
      <h1>
        {data?.data.name} - {data?.data.alterEgo}
      </h1>
    );
  }
  return <h1>ok</h1>;
};

export default Hero;
