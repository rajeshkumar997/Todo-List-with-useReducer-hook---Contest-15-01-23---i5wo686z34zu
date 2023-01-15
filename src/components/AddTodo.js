import React, { useState } from "react";
import { Todo } from "./Todo";
import "../styles/App.css";

const AddTodo = ({ dispatch, state }) => {
  const [text, setText] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD", value: text });
    setText("");
  }

  function handleDelete(id) {
    const newData = state.todos.filter((e, i) => e.id !== id);
    dispatch({ type: "DELETE", data: newData });
  }

  return (
    <>
      <form id="todo-form" onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          id="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="addBtn">Add</button>
      </form>
      <div className="todoList">
        {state.todos.map((e, i) => (
          <Todo key={e.id} {...e} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export { AddTodo };
