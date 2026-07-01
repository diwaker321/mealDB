import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <Body/> */}
    <Outlet/>
    </>
  )
}

export default App
