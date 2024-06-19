import React from 'react'
import Div from './components/Div'
import { useState } from 'react'

function App() {
  let [number, change] = useState(0)
  
  function inc(){
    change(++number)
    console.log(number);
  }

  function dec(){
    change(--number)
    console.log(number);
  }

  return (
    <>
       <h1 className='text-white font-sans font-black text-6xl'>COUNTER</h1>
       <h2 className='text-white font-sans font-black text-3xl'>{number}</h2>
       <Div label1={"+"} label2={"-"} color1={"bg-green-700"} hoverColor1={"bg-green-900"} color2={"bg-red-700"} hoverColor2={"bg-red-900"} func1={inc} func2={dec}/>
    </>
  );
}

export default App;
