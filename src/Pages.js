
import React from 'react'
import './Styles/Pages.css'
import { useState } from 'react'

import CityFour from './images/cityfour.jpeg'
import CityOne from './images/cityone.jpeg'


const Pages = () =>{
 const [round, setRound] = useState(1)
 const multiple=()=>{
  setRound(round * 2)
  document.querySelector('#h3').textContent += `${round},`
 }

 let sessions = [ ]
 const display=()=>{
   sessions.forEach((session)=>{ 
      const details = document.querySelector('.container-level')
      details.innerHTML = `
      <div class='detaild'>
        <img src=${session.images} class='image'/>
        <div class='bio'>
          <h1>${session.title}</h1>
          <p>${session.level}</p>
          <h6>${session.reqs}</h6>
        </div>
      </div>`
    })
 }
 const pushing=()=>{
  sessions.push(
    {
      images:CityFour,
      title: 'SessionB',
      level: 'Intermediate',
      reqs: 'Beginner-level'
    }
  )
  display()
}
const pushing1=()=>{
  sessions.push(
    {
      images:CityOne,
      title: 'SessionA',
      level: 'Beginner',
      reqs: 'Entry-level'
    }
    )
    display()
  }
  const details = document.querySelector('.container-level')

  const backing=()=>{
    document.querySelector('.detaild').textContent = {details}
    }
  
  return (
    <div className='plans'> 
      <section>
        <button onClick={backing} >Back</button>  
      </section>     
      <section  className='cont container-level'>
        <button  onClick={pushing} >
          <img src={CityFour} alt='' className='img'/>
        </button>
        <button  onClick={pushing1} >
          <img src={CityOne} alt='' className='img'/>
        </button>
      </section>
    </div>
  )
}

export default Pages
