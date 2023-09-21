import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {
  state = {
    done: false
  }

  onLabelClick = () => {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    const classNames = `todo-list-item ${done ? 'done' : ''}`;

    const labelStyle = {
      color: important ? 'red' : 'black',
      fontWeight: important ? 'bold' : 'normal',
      textDecoration: done ? 'line-through' : 'none'
    };

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
          <button type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListItem;
