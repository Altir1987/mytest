import React from "react";
import ReactDOM from 'react-dom';


const TodoList = () => {
  return(
    <ul>
      <li>Обучение React</li>
      <li>Хочу быть ТОП</li>
    </ul>
  )
}
const AppHeder = () => {
  return(
    <h1>Мой Список Дел</h1>
  )
}
const SerchPanel = () => {
  return(
    <input placeholder="поиск"/>
  )
}
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
