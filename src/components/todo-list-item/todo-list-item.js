import React from "react";
import "./todo-list-item.css";


const TodoListItem=({label, onDelete, onToggleImportant, onToggleDone, done, important})=> {
  const classNames = `todo-list-item ${done ? "done" : ""}`;

  const labelStyle = {
    color: important ? "red" : "black",
    fontWeight: important ? "bold" : "normal",
    textDecoration: done ? "line-through" : "none",
  };

  const buttonStyle = {
    color: important ? "blue" : "red",
  };

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={labelStyle}
        onClick={onToggleDone}
      >
        {label}
      </span>
      <div className="button">
        <button
          type="button"
          className={`btn btn-outline-success btn-sm float-right ${
            important ? "active" : ""
          }`}
          onClick={onToggleImportant}
          style={buttonStyle}
        >
          <i className="fa fa-exclamation"/>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o"/>
        </button>
      </div>
    </span>
  );
}

export default TodoListItem;
