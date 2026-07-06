import React from 'react'

const Child1 = ({text , setText}) => {
    console.log('childone logged');
    
  return (
    <div>
      <h1>Child1</h1>
      <input type="text" placeholder='enter a value' value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default Child1
