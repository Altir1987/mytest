import React from "react";
import Listitem from "./todo-list-item";
import TodoListItem from "./todo-list-item";


const TodoList = ({label}) => {


  return(
    <ul>
      <li><TodoListItem label="Отжимание"/></li>
      <li><TodoListItem label="Созвонится с офисом" important/></li>
      <li><TodoListItem label="Уволить всех в Ubisoft"
      important /></li>
    </ul>
  )
}

export default TodoList
