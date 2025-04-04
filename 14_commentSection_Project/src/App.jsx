import "./App.css";
import Comments from "./components/Comments";
import Input from "./components/input";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState({});
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Hello",
      replies: [
        {
          id: 1,
          replyText: "hiiii",
        },
      ],
    },
  ]);
  console.log(comments);
  const addComment = (newComment) => {
    const newCommentObj = {
      id: Date.now(),
      text: newComment,
      replies: [],
    };
    setComments([...comments, newCommentObj]);
  };
  const addReply = (commentId, newReply) => {
    const newReplyOBj = {
      id: Date.now(),
      replyText: newReply,
    };
    setComments((prevComments) =>
      prevComments.map((prevComment) =>
        prevComment.id === commentId
          ? { ...prevComment, replies: [...prevComment.replies, newReplyOBj] }
          : prevComment
      )
    );
    setReply({ ...reply, [commentId]: "" });
  };
  return (
    <>
      <div className=" text-white  border-2 border-[#118ab2] rounded-2xl h-[90vh] w-1/2 m-auto mt-8 shadow-2xl ">
        <h1 className="text-center text-3xl font-bold underline">
          Comment Section
        </h1>
        <div className="flex flex-col items-center">
          <Input input={input} setInput={setInput} addComment={addComment} />
          <Comments
            comments={comments}
            reply={reply}
            setReply={setReply}
            addReply={addReply}
          />
        </div>
      </div>
    </>
  );
}

export default App;
