import React from "react";
import "./Todo.scss";

const Todo = (props) => {
  const {todoItem, handleDeleteTodo, id, handleChangeStatus} = props;
  return (
    <div className={`todo ${todoItem.completed ? 'todo-active' : ''}`}>
      <div className="todo_title">{todoItem.title}</div>
      <div className="todo_icon">
        <div className="todo_icon-checked" onClick={() => handleChangeStatus(id)}>
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="todo_icon-clear" onClick={() => handleDeleteTodo(id)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Todo;
