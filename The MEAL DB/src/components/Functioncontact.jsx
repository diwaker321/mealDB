import React, { useState } from 'react'

const Functioncontact = ({name}) => {
    // how to make sate in functional component -- hooks // latest concept -- fbcomponent
    const [score , setscore] = useState(0)
    const [ score2 , setscoretwo] = useState(0)
    // setscore(score+1)
    // score = 10 
  return (
    <div>
      <p>this is functional {name} component</p>
      <h1> state variable in functional componenet: {score}</h1>
    <button onClick={()=>setscore(score++)}></button>
    </div>
  )
}



export default Functioncontact
