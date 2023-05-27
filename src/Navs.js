

import React from 'react'
import './Styles/Navs.css'
import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'

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
          User-Reviews
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
const NaviBtns =()=>{
  return(
    <ul id="navibars">
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
          Profile
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
  const [navis, setNavis] = useState(false)
  const [cancelBtn, setCancelBtn] = useState(true)

  const navHide = ()=>{
    setNavis(!navis)
    setCancelBtn(!cancelBtn)
  }
  return (
  <>
    <div className="menus">
      {cancelBtn ?
        <button id='btn' className="navbtn" onClick={navHide} >
          Menu
        </button>
        :
        <button id='btn' className="navbtn" onClick={navHide} >
          Remove
        </button>
      }
      <NavBtns/>
      {navis ? 
        <NaviBtns/>
        : ''
      }
      <Outlet/>
    </div>
  </>
  )
}

export default Navs
