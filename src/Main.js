import React from "react"
import { useState } from "react"


const Person = (props)=>{
  return(
    <>
      <h1>PERSON</h1>
      <h3>Name: {props.name} </h3>
    </>
  )
}
const CounterSave = ()=>{
  return(
    <div id="counter">
      Current Count:
    </div>
  )
}


const Content = () => {
  const [counter, setCounter] = useState(01)

  const handleCounter = ()=>{
    setCounter(counter + 1)
  }
  const resetCounter = ()=>{
    setCounter(0)
  }
  const saveCounter = ()=>{
    document.getElementById("counter").innerText += `,${counter}`
  }
  const deleteCounter = ()=>{
    document.getElementById("counter").innerText = `Current Count: `
  }
  return (
    < >    
        <main className='main'>

            <section className="left">

                <button onClick={handleCounter} >
                  ADD
                </button>
                <h2>{counter}</h2>
                <button onClick={resetCounter} >
                  RESET
                </button>
                <button onClick={saveCounter} >
                  SAVE
                </button>
                <button onClick={deleteCounter} >
                  DELETE
                </button>
                <CounterSave/>
                <Person name = 'Jay'/>
            </section>

            <section className="right">
            </section>
        </main>
        
    </>
  )
}

export default Content
