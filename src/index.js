import React from "react";
import ReactDOM from 'react-dom';

import TodoList from "./components/todo-list";
import AppHeder from "./components/apphelper";
import SerchPanel from "./components/serchpanel";





const App = () =>{
 return(
   <div>
     <AppHeder/>
     <SerchPanel/>
     <TodoList/>
   </div>

 )
}

export default App

ReactDOM.render(<App/>, document.getElementById('root'))
