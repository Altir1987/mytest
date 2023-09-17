import React from "react";
import ReactDOM from 'react-dom';

import TodoList from "./components/todo-list";
import AppHeder from "./components/apphelper";
import SerchPanel from "./components/serchpanel";
import Navbar from "./components/navbar";
import s from './index.module.css'





const App = () =>{
 return(
   <main className={s.main}>
   <div className={s.indexcss}>
     <Navbar/>
     <AppHeder/>
     <SerchPanel/>
     <TodoList/>
   </div>
   </main>
 )
}

export default App

ReactDOM.render(<App/>, document.getElementById('root'))
