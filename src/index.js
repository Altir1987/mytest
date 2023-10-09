import React, {Component} from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import {v4 as uuidv4} from "uuid";
import "./index.css";
import ItemAddForm from "./components/item-add-form/indexAdd";
import {update} from "lodash";

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem("позвонить Жене"),
      this.createTodoItem("Уволить с Ubisoft"),
      this.createTodoItem("Совещание"),
    ],
    term: "",
    filter:"Все",// 'Все''Активные''Выполнены'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: uuidv4(),
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    if (idx === -1) {
      return arr;
    }

    return update(arr, [idx, propName], (value) => !value);
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => ({
      todoData: todoData.filter((item) => item.id !== id)
    }));
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => ({
      todoData: [...todoData, newItem],
    }));
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const updatedTodoData = this.toggleProperty(todoData, id, "important");
      return {
        todoData: updatedTodoData
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const updatedTodoData = this.toggleProperty(todoData, id, "done");
      return {
        todoData: updatedTodoData
      };
    });
  };
  onFilterChange = (filter) => {
    this.setState({filter});
  }
  onSerchChange = (term) => {
    this.setState({term});
  }
  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
      case "Все":
        return items;
      case "Активные":
        return items.filter(item => !item.done);
      case "Выполнены":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const {todoData, term, filter} = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;


    return (
      <main className="main">
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount}/>
          <div className="top-panel d-flex">
            <SearchPanel onSearchChange={this.onSerchChange}/>
            <ItemStatusFilter filter={filter}
                               onFilterChange={this.onFilterChange}/>
          </div>

          <TodoList
            todos={visibleItems}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <ItemAddForm onItemAdded={this.addItem}/>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
