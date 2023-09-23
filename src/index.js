import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

import './index.css';
import {findAllByDisplayValue} from "@testing-library/react";


export default class App extends Component {

  state = {
    todoData: [
      {label: 'позвонить Жене', important: false, id: 1},
      {label: 'Уволить с Ubisoft', important: true, id: 2},
      {label: 'Совещание', important: false, id: 3},
      {label: 'Уроки', important: false, id: 4},
      {label: 'Пообедать', important: false, id: 5}
    ]
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }

  render() {

    return (
      <main className="main">
        <div className="todo-app">
          <AppHeader toDo={1} done={1}/>
          <div className="top-panel d-flex">
            <SearchPanel/>
            <ItemStatusFilter/>
          </div>

          <TodoList todos={this.state.todoData}
                    onDeledet={this.deleteItem}/>
        </div>
      </main>
    );
  }


};

ReactDOM.render(<App/>,
  document.getElementById('root'));
