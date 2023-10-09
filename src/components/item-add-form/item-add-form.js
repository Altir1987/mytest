import React, {Component} from "react";
import "./item-add-form.css"


export default class ItemAddForm extends React.Component {

  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label.trim() === '') {
      return;
    }
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {


    return (

      <form className="item-add-form d-flex">
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="Что нужно сделать"
               value={this.state.label}/>
        <button className="btn btn-otline-secondary"
                onClick={this.onSubmit}>
          Добавить
        </button>
      </form>


    )
  }
}


