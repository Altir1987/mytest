import React from "react";
import s from './navbar.module.css'


const Navbar=()=>{
  return(
    <nav className={s.navbar}>
      <div>
        <ul className={s.text}>Для ленивых поп</ul>
      </div>
    </nav>
  )
}


export default Navbar
