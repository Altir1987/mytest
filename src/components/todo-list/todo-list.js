import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({todos, onDelete, onToggleDone, onToggleImportant}) => {
  return (
    <ul className="list-group todo-list">
      {todos.map(({id, ...itemProps}) => (
        <li key={id} className="list-group-item">
          <TodoListItem {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}/>
        </li>
      ))}
    </ul>
  );
};


export default TodoList;
