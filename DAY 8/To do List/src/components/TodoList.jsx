import React from "react";
import Todo from "./Todo";

function TodoListComponents({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoListComponents;
