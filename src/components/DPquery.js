// import React from "react";

// import { useQueries } from "@tanstack/react-query";
// import axios from "axios";
// const DPquery = ({ heroIds }) => {
//   console.log(heroIds);
//   const fetchh = (id) => {
//     const abc = axios.get(`http://localhost:4000/superheroes/${id}`);
//     return abc;
//   };
//   const results = useQueries({
//     queries: [
//       { queryKey: ["hero", 1], queryFn: fetchh(1) },
//       { queryKey: ["hero", 2], queryFn: fetchh(2) },
//     ],
//   });
//   console.log({ results });
//   if (results?.isLoading) {
//     return <h1>loading...</h1>;
//   }
//   if (results?.isLoadingisError) {
//     return <h1>{results.error.message}</h1>;
//   }
//   if (results?.isLoadingdata) {
//     return <h1>hi nabeel</h1>;
//   }
//   return <h1>ok</h1>;
// };

// export default DPquery;
