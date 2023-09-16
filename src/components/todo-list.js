import React from "react";
import Listitem from "./todo-list-item";
import TodoListItem from "./todo-list-item";


const TodoList = (props) => {
  return(

    <ul>
      <li><TodoListItem/></li>
      <li><TodoListItem/></li>
    </ul>
  )
}

export default TodoList
