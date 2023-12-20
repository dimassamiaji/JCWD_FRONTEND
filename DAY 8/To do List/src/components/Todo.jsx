import React from "react";

function TodoComponents({ todo, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white mb-2 p-2 rounded-md shadow-md">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded-md"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoComponents;
