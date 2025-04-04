import React from "react";

export default function Comments({ comments, addReply, reply, setReply }) {
  const handleReply = (e, commentId) => {
    e.preventDefault();
    if (!reply[commentId]) return; // Prevent empty replies
    addReply(commentId, reply[commentId]);
    setReply({ ...reply, [commentId]: "" }); // Clear input for this specific comment
  };

  return (
    <ul>
      {comments.map((comment) => (
        <li
          className="flex flex-col bg-gray-500 w-[20vw] pl-2 rounded-xl mt-2 p-2"
          key={comment.id}
        >
          <strong>{comment.text}</strong>

          {/* Render Replies */}
          <div className="ml-4 mt-2">
            {comment.replies.map((reply) => (
              <p key={reply.id} className="text-sm text-gray-300">
                ↳ {reply.replyText}
              </p>
            ))}
          </div>

          {/* Reply Input */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter your reply"
              value={reply[comment.id] || ""}
              onChange={(e) =>
                setReply({ ...reply, [comment.id]: e.target.value })
              }
              className="border-2 rounded-md px-2 py-1 text-black"
            />
            <button
              onClick={(e) => handleReply(e, comment.id)}
              className="bg-red-600 rounded-xl px-3 py-1 ml-2 cursor-pointer"
            >
              Reply
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
