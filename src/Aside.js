

import React from 'react'
import { NavLink } from "react-router-dom"


const Aside = () => {
  return (
    <div>
      <>
      <ul id="navbars">
          <li>
            <button>
              <NavLink
                  className="navbar-item"
                  activeClassName="is-active"
                  to="/"
                  exact>
                Home
              </NavLink>
            </button>
          </li>
        </ul>
      <h1>
        Aside.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis aspernatur ea nulla. Nemo ut est doloribus adipisci excepturi voluptate fugit officia nulla, alias quos nihil rerum harum, ab dolore earum natus maiores ratione delectus asperiores libero? Dolorem, eaque nostrum?
      </p>
      </>
    </div>
  )
}

export default Aside
