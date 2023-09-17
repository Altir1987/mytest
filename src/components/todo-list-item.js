import React from "react";


const TodoListItem = ({label, important = false}) => {
  const liStyle = {
    color: important ? 'green': 'yelow'
  };

  return (

    <span style={liStyle}>{label}</span>
  )
}


export default TodoListItem
