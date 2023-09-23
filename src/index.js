import React from 'react';
import ReactDOM from 'react-dom';


import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

import './index.css';
import {findAllByDisplayValue} from "@testing-library/react";


const App = () =>
{

  const todoData = [
    { label: 'позвонить Жене', important: false, id: 1 },
    { label: 'Уволить с Ubisoft', important: true, id: 2 },
    { label: 'Совещание', important: false, id: 3 },
    { label: 'Уроки', important: false, id: 4 },
    { label: 'Пообедать', important: false, id: 5 }
  ];

  return (
    <main className="main">
    <div className="todo-app">
      <AppHeader toDo={1} done={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
    </main>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
