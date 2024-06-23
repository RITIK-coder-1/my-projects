import React from 'react'
import Background from './components/Background'
import './App.css'
import Cards from './components/Cards'
function App() {

  return (
    <>
    <div className="relative w-full h-full">
    <Background />
    <div className="fixed h-full w-full bg-blue-900/40 z-10 p-5 flex gap-3">
    <Cards />
    <Cards />
    <Cards />
    </div>
    </div>
    </>
  )
}

export default App
