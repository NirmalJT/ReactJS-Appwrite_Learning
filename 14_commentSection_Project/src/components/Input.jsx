import React from "react";

function Input({ input, setInput, addComment }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(input);
    setInput("");
  };
  return (
    <>
      <div>
        <form className="flex justify-center mt-7 items-center" onSubmit={handleSubmit}>
          <input
            className="border-[#118ab2] placeholder-white border-2 rounded-xl px-4 py-2 w-1/1  "
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your comment"
          />
          <button className="bg-[#06d6a0] text-black font-bold rounded-xl px-4 py-2 ml-2 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Input;
