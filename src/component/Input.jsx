import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { useState } from "react";

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const newitem = { title, body };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(newitem));
        setTitle("");
        setBody("");
      }}
    >
      제목 :{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      내용 :{" "}
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Input;
