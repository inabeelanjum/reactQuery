import React from "react";

import { useQueries } from "@tanstack/react-query";
import axios from "axios";
const DPquery = ({ heroIds }) => {
  console.log(heroIds);

  const fetchh = (id) => {
    console.log("hi", id);
    const abc = axios.get(`http://localhost:4000/superheroes/${id}`);
    console.log("abc", abc);
    return abc;
  };
  const basicF = (ai) => {
    const a = ai.map((i) => {
      return {
        queryKey: ["post", i],
        queryFn: () => fetchh(i),
        staleTime: Infinity,
      };
    });
    console.log("obj", a);
    return a;
  };
  // basicF();
  console.log("heroIds", heroIds);
  const queriesList = heroIds.map((a) => {
    return {
      queryKey: ["post", a],
      queryFn: () => fetchh(a),
      staleTime: Infinity,
    };
  });
  // : [];
  const results = useQueries({
    queries: basicF(heroIds),
  });
  console.log(results);
  if (results?.isLoading) {
    return <h1>loading...</h1>;
  }
  if (results?.isLoadingisError) {
    return <h1>{results.error.message}</h1>;
  }
  if (results?.isLoadingdata) {
    return <h1>hi nabeel</h1>;
  }
  return <h1>ok</h1>;
};

export default DPquery;
