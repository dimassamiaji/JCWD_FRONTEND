import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoAppComponents() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputText },
      ]);
      setInputText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-black shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        Chores ToDo List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow px-2 py-1 mr-2 border rounded-md"
          placeholder="Add Task..."
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md "
        >
          Add Task
        </button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}
export default TodoAppComponents;
