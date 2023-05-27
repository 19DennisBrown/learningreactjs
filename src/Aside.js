

import React from 'react'
import cityone from './images/cityone.jpeg'
import citytwo from './images/citytwo.jpeg'
import citythree from './images/citythree.jpeg'
import cityfour from './images/cityfour.jpeg'

const Images=()=>{

   const Card=(props)=>{
    return(
      <>
        <img src={props.image} alt="" />  
          <p className= 'info'>
            {props.description} <br/>
            <b>{props.town}</b>
          </p>
      </>
    )
   }
  return(
    <section>
      <section className="img--collection">
        <div>
          <Card
            image={cityone}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta dolorum optio!'
            town='Ohhio, Japan'
          />
        </div>
        <div>
        <Card
            image={citytwo}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta dolorum optio!'
            town='Rumuruti, Kenya'
          />
        </div>
        <div>
        <Card
            image={citythree}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta dolorum optio!'
            town='Luganja, Uganda'
          />
        </div>
        <div>
        <Card
            image={cityfour}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta dolorum optio!'
            town='Goma, DRC'
          />
        </div>
         
      </section>
    </section>
  )
}

const Aside = () => {
  return (
    <div>
      <>
        <Images/>
        <h1>
          Aside.
        </h1>
        <p className='aside-p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis aspernatur ea nulla. Nemo ut est doloribus adipisci excepturi voluptate fugit officia nulla, alias quos nihil rerum harum, ab dolore earum natus maiores ratione delectus asperiores libero? Dolorem, eaque nostrum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta provident nesciunt odit natus eligendi fugit quis cum, corrupti earum unde enim ipsam quod, aperiam nisi delectus reprehenderit eum animi dolores sit iure. Vero perspiciatis optio blanditiis consequatur possimus minus eveniet ullam nulla nihil consectetur quisquam ad, perferendis hic nam dolore soluta. Sint, quibusdam magni. Odit ullam voluptatum incidunt vel rem, at architecto reprehenderit expedita veritatis id, officiis culpa assumenda neque, laboriosam minima cumque animi fuga nesciunt explicabo adipisci vero! Quia illum asperiores et qui cumque perferendis tempore illo repudiandae accusantium unde earum nihil autem obcaecati perspiciatis cum dolore voluptas, alias nemo ex quam voluptate. Maiores ad in perferendis quasi, rem alias quia ratione iste blanditiis natus cum amet fugit impedit necessitatibus possimus ipsam sit corporis, repellendus accusantium architecto beatae quos ut! Ex dicta alias quasi ipsum natus illum minus quam rem! Necessitatibus soluta fuga incidunt ex, culpa iusto nemo nobis ad facere! Est ullam nostrum laudantium reiciendis suscipit maxime dolores alias sed officiis excepturi! Tempore eius, distinctio modi omnis odio provident necessitatibus rem illo doloribus illum reprehenderit in accusamus nobis officia! Officia iure accusamus vel, quibusdam aperiam doloribus esse. Facere accusantium magni libero assumenda eum, iste quaerat at error sapiente!
        </p>

        </>
    </div>

  )
}

export default Aside
