import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Список Заданий</h1>
      <h2>{toDo} Сделать, {done} Сделано</h2>
    </div>
  );
};

export default AppHeader;
