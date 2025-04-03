import React from "react";
// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
export default function GitHub() {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/NirmalJT")
  //       .then((Response) => Response.json())
  //       .then((Data) => {
  //         console.log(Data);
  //         setData(Data);
  //       })
  //       .catch(console.error("Error"));
  //   }, []);

  return (
    <>
      <div className="bg-gray-700 p-10 m-10 rounded-2xl text-2xl text-white  ">
        <div className="flex gap-10 flex-wrap justify-center items-center">
          <img
            className="rounded-2xl"
            src={data.avatar_url}
            alt=""
            width={"300px"}
          />
          <div>
            <h1>User Name: {data.login}</h1>
            <h1>Github Followers : {data.followers}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/NirmalJT");
  return response.json();
};
