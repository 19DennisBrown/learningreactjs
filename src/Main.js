import React from "react"
import './Styles/Main.css'
import Pic from './images/citythree.jpeg'




const Main = () => {
  return (
    <div className="main-content">
      <section className="text">
        <h1>City Profile</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, at.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident saepe eius quos illum tempore praesentium animi quasi nemo eos.
        </p>
        <button>JOIN US.</button>
      </section>
      <section className="images">
        <img src={Pic} alt="" />
      </section>
    </div>
  )
}

export default Main
