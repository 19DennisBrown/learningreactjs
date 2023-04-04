import React from 'react'

const User = () => {
  //Collect and display.
  
    const fruits = []
    const addElements=() =>{
      fruits.push(
        {
          fruitName: "Mango",
          color: "Yellow",
          figure:"sphere"
        }
      )
    }

    const displayElement=() =>{
      addElements()
      fruits.forEach((fruit)=>{
        const {fruitName, color, figure} = fruit
        document.getElementById("person").textContent =`The fruit is called ${fruitName} which is color ${color} and ${figure} in shape.`
      })
    }
    const eraseElement=()=>{
      document.getElementById("person").textContent = ""
    }
  return (
    <>
      <div>
        <>
        <h1>This is the User.</h1>
        <div>
          <button onClick={displayElement} >click</button>
          <button className='delete-btn' onClick={eraseElement} >X</button>
          <section id="person">

          </section>
        </div>
        </>
      </div>
      
    </>
  )
}

export default User
