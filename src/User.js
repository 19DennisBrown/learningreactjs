import React from 'react'
import './Styles/User.css'
import PicFour from './images/cityfour.jpeg'
import PicThree from './images/citythree.jpeg'
import PicTwo from './images/citytwo.jpeg'
import PicOne from './images/cityone.jpeg'

const Reviews=(props)=>{
  return(
    <section className='reviewing'>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className='review-info'>
        <span className='type'>Type : {props.type}</span>
        <span className='gender'>Gender : {props.gender}</span>
        <span className='date'>Date : {props.date}</span>
        <span className='rating'>Rating : {props.rating}</span>
      </div>
      <h3>Complements</h3>
      <div className="complements">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sapiente esse quibusdam vitae, neque assumenda ratione.
        </p>
        <h3>Was this useful?</h3>
        <div className="butns">
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
    </section>
  )
}
const User = () => {

  
  return (
    <section className='container'>
     <Reviews 
        image={PicFour} 
        type='SESSION BEGINNER'
        gender='Male'
        date='12/04/017'
        rating='*****'
        />
     <Reviews 
        image={PicThree} 
        type='SESSION BEGINNER'
        gender='Female'
        date='12/04/021'
        rating='*****'
        />
     <Reviews 
        image={PicTwo} 
        gender='Male'
        type='SESSION BEGINNER'
        date='12/04/019'
        rating='*****'
        />
     <Reviews 
        image={PicOne} 
        gender='Female'
        type='SESSION BEGINNER'
        date='12/04/020'
        rating='*****'
        />
     <Reviews 
        gender='Male'
        image={PicFour} 
        type='SESSION BEGINNER'
        date='12/04/019'
        rating='*****'
        />
     <Reviews 
        image={PicThree} 
        gender='Male'
        type='SESSION BEGINNER'
        date='12/04/014'
        rating='****'
        />
     
    </section>
  )
}

export default User
