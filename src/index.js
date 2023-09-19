import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'позвонить Жене', important: false, id: 1 },
    { label: 'Уволить с Ubisoft', important: true, id: 2 },
    { label: 'Пообедать', important: false, id: 3 }
  ];

  return (
    <main className="main">
    <div className="todo-app">
      <AppHeader toDo={1} done={2} /> //не так и страшно)))
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
