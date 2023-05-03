

import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const NavBtns =()=>{
  return(
    <ul id="navbars">
      <li>
        <NavLink
            className='linkBtn'
            to="/"
            exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
            className='linkBtn'
            to="/aside"
            exact>
          Aside
        </NavLink>
      </li>
      <li>
        <NavLink
            className='linkBtn' 
            to="/user"
            exact>
          User
        </NavLink>
      </li>
      <li>
        <NavLink
            className='linkBtn' 
            to="/pages"
            exact>
          Pages
        </NavLink>
      </li>
    </ul>
    
  )
}

const Navs = () => {

  const navHide = ()=>{
    const navBars = document.getElementById("navbars")
    navBars.classList.toggle("hidden")
  }
  return (
    <>
    <div className="menus">
      <button className="navbtn" onClick={navHide} >
        Menu
      </button>
      <NavBtns/>
      <Outlet/>
    </div>
  </>
  )
}

export default Navs
