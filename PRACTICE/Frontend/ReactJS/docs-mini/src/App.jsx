import React, { useRef } from 'react'
import Background from './components/Background'
import './App.css'
import Cards from './components/Cards'
function App() {
  const ref = useRef(null)

  return (
    <>
    <div className="relative w-full h-full">
    <Background />
    <div ref={ref} className="fixed h-full w-full bg-blue-900/40 z-10 p-5 flex gap-3">
    <Cards name={"Card 1"} referencec={ref}/>
    <Cards name={"Card 2"} referencec={ref}/>
    <Cards name={"Card 3"} referencec={ref}/>
    </div>
    </div>
    </>
  )
}

export default App
