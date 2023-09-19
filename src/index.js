import React from "react";
import ReactDOM from 'react-dom';

import TodoList from "./components/todo-list";
import AppHeder from "./components/appHeder";
import SerchPanel from "./components/serchpanel";
import Navbar from "./components/navbar";
import style from './index.module.css'


const App = () => {
  const todoDate = [
    {label: 'Уволить всех с Ubisoft', important: false,id:1},
    {label: 'Позвонить жене', important: true,id:2},
    {label: 'Написать другу', important: false,id:3},
    {label: 'Выпить кофе', important: true,id:4},

  ]
  return (
    <main className={style.main}>
      <div className={style.indexcss}>
        <Navbar/>
        <AppHeder/>
        <SerchPanel/>
        <TodoList todos={todoDate}/>
      </div>
    </main>
  )
}

export default App

ReactDOM.render(<App/>, document.getElementById('root'))
