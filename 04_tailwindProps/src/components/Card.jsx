import React from "react";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="p-1 mb-1.5 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
        <div className=" bg-black sm:p-10 p-6 rounded-xl">
          <div className="">
            <h5 className="text-xl font-bold text-gray-200">
              {props.departmentName}
            </h5>
            <p className="mt-2 text-lg text-gray-400">hello my name is</p>
            <button className="mt-1.5">
              {props.btnText || "Hello Click"}
              {/* {props.btnText} */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
