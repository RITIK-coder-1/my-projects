import React from 'react'
import Div from './components/Div'
import { useState } from 'react' // importing the useState hook to change the counter

function App() {
  let [number, changeNumber] = useState(0) // the initial value of number is 0
  let [type, changeType] = useState("even")

  
  function inc(){

    changeNumber(number => {
      const newNumber = ++number // this increases the number by 1, I used the prefix increment op, because it first increases the number and then, updates the original number

      check(newNumber) // checks the new number 

      return newNumber // returns the new number
    }) 
  }

  function dec(){
    if (number <= 0) {
      alert("You can't count to negative integers")
      return // exist the function // If the number is 0, it can't be reduced further
    }
    changeNumber(number => {
      const newNumber = --number // this decreases the number by 1, I used the prefix increment op, because it first decreases the number and then, updates the original number

      check(newNumber) // checks the new number

      return newNumber // returns the new number
    }) 

  }

  function check(newNumber){

    // this functions checks if the new incremented or decremented number is odd or even

    if (newNumber % 2 !== 0) {
      changeType("odd")
    } else {
      changeType("even")
    }
  }

  return (
    <>
       <h1 className='text-white font-sans font-black text-6xl'>COUNTER</h1>
       <h2 className='text-yellow-200 font-sans font-black text-3xl'>{number}</h2>
       <h3 className="text-blue-400 font-sans font-black text-xl">{type}</h3>
       <Div label1={"+"} label2={"-"} color1={"bg-green-700"} hoverColor1={"bg-green-900"} color2={"bg-red-700"} hoverColor2={"bg-red-900"} func1={inc} func2={dec}/>
    </>
  );
}

export default App;
