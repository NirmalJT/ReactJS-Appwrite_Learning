import React from "react";
import { useParams } from "react-router-dom";
export default function Users() {
  const { userId } = useParams();
  return (
    <>
      <div className=" bg-gray-700 m-10 p-10 rounded-2xl flex flex-wrap items-center justify-center gap-40 text-white text-2xl font-bold">
        <img
          className="  rounded-4xl"
          src="https://img.freepik.com/free-photo/3d-rendering-kid-playing-digital-game_23-2150898496.jpg"
          alt="UserImage"
          width={"300px"}
        />
        <h1>User : {userId}</h1>
      </div>
    </>
  );
}
