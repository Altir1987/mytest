import React from "react";
import style from './navbar.module.css'


const Navbar=()=>{
  return(
    <nav className={style.navbar}>
      <div>
        <ul className={style.text}>Для ленивых поп</ul>
      </div>
    </nav>
  )
}


export default Navbar
