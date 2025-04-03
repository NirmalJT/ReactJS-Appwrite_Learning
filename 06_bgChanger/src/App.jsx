import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className=" h-screen text-center "
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl font-bold pt-5">BackGround Changer</h1>
        <div className=" bottom-8 flex justify-center gap-4 bg-blue-300 rounded-2xl px-3 py-2 fixed left-[22vw]  flex-wrap">
          <button
            className=" px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="bg- px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("gray")}
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("lavender")}
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("white")}
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            className="bg-blue-500 px-3 py-2 rounded-2xl cursor-pointer"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
