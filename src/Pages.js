
import React from 'react'
import './Styles/Pages.css'
import { useState } from 'react'

import CityFour from './images/cityfour.jpeg'
import CityThree from './images/citythree.jpeg'
import CityTwo from './images/citytwo.jpeg'
import CityOne from './images/cityone.jpeg'



const Sessions=(props)=>{
  const [details, setDetails] = useState(true)
  const [info, setInfo] = useState(false)
  const handleAppear=()=>{
        setInfo(!info)
        setDetails(!details)
      }
      return(
    <>
      {info ? 
        <div className='sessions'>
          <img src={props.image}  alt='city  here'/>
          <div className='info'>
            <h2>{props.city}</h2>
            <h5>{props.desc}</h5>
          </div>
          <button onClick={handleAppear} >XLOSE</button>
        </div>
        : ''}

      {details ?
      <button onClick={handleAppear} className='btn-img'>
        <img src={props.image} alt="" />
      </button> 
      : ''}
      
    </>
  )
}
  
const Pages = () => {

  return (
    <div className='Container-page'>
      <Sessions 
      city='Ghudong, China' 
      desc='Town of Umbrellas'
      image={CityFour}
      />
      <Sessions 
      city='Nairobi, Kenya' 
      desc='Top in Public Transport Culture.'
      image={CityThree}
      />
      <Sessions 
      city='Kampala, Uganda' 
      desc='Named after seven Impalas'
      image={CityTwo}
      />
      <Sessions 
      city='Kigali, Rwanda' 
      desc='Futuristic City in E.Africa.'
      image={CityOne}
      />
    </div>
  )
}

export default Pages
