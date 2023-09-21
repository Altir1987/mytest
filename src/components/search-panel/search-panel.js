import React from "react";
import style from './serchpanel.css'
import ItemStatusFilter from "../item-status-filter/item-status-filter";



const SearchPanel = () => {

  return(
    <input type="text"
            className="form-control search-input"
            placeholder="поиск дел"/>

  )
}

export default SearchPanel
