import React from 'react';
import './todo-list-item.css';



class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState(({done})=>{
      return{
        done: !done
      }
    });
  }
  onMarkImportant = () => {
    this.setState(({important})=>{
      return{
        important: !important
      }
    });
  }

  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;
    const classNames = `todo-list-item ${done ? 'done' : ''}`;

    const labelStyle = {
      color: important ? 'red' : 'black',
      fontWeight: important ? 'bold' : 'normal',
      textDecoration: done ? 'line-through' : 'none'
    };

    const buttonStyle = {
      color: important ? 'blue' : 'red'
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={labelStyle}
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div className="button">
          <button
            type="button"
            className={`btn btn-outline-success btn-sm float-right ${important ? 'active' : ''}`}
            onClick={this.onMarkImportant}
            style={buttonStyle}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    );
  }nDelete
}

export default TodoListItem;
