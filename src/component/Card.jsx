import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delTodo, finTodo } from "../redux/modules/todos";

function Card(props) {
  const dispatch = useDispatch();
  const todo = props.todos;
  return (
    <>
      <div key={todo.id}>
        <div>{todo.title}</div>
        <div>{todo.body}</div>
        <Link to={`/Detail/${todo.id}`}>상세페이지..</Link>
        <button>수정</button>
        <button onClick={(e) => dispatch(finTodo(todo))}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={(e) => dispatch(delTodo(todo))}>삭제</button>
      </div>
    </>
  );
}

export default Card;
