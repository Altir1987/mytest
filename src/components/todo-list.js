import React from "react";
import Listitem from "./todo-list-item";
import TodoListItem from "./todo-list-item";


const TodoList = ({todos}) => {

  const element = todos.map((item)=>{
    const {id,...itemProps}=item;
    return(
      <li key={id}><TodoListItem {...itemProps}
      /></li>
    )
  })

  return (
    <ul>
      {element}
    </ul>
  )
}

export default TodoList
