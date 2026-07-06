import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    const [text , setText] = useState("")
  return (
    <div>
    <Child1 text={text} setText={setText}/>
    <Child2 text={text}/>
    </div>
  )
}

export default Parent
