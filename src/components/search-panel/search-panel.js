import React, {Component} from "react";
import style from './serchpanel.css'
import ItemStatusFilter from "../item-status-filter/item-status-filter";


export default class SearchPanel extends React.Component {
  state = {
    term: ''
  }
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render() {

    return (
      <input type="text"
             className="form-control search-input"
             placeholder="поиск дел"
             value={this.state.term}
             onChange={this.onSearchChange}/>

    )

  }

}





