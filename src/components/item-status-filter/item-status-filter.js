import React from 'react';




 class ItemStatusFilter extends React.Component{
  render () {



    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info">Все</button>
        <button type="button"
                className="btn btn-outline-secondary">Активные</button>
        <button type="button"
                className="btn btn-outline-secondary">Выполнено</button>
      </div>
    );
  }

}











export default ItemStatusFilter;
