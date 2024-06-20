import React, { useState } from 'react'
import Card from './components/Card' // imported the Card component
import { FaRegCircle } from "react-icons/fa6"; // the circle icon from react icons
import { RxCross2 } from "react-icons/rx"; // the cross icon from react icons

function App() {

  let circle = "O"
  let cross = "X"

  let [turn, changeTurn] = useState(true)

  // function to change the state of the turn -->

  function a(){
    console.log("clicked")
    changeTurn(!turn)
  }

  function b(){
    if (turn){
      return FaRegCircle
    } else {
      return RxCross2
    }
  }

  return (
    <> 
    
    <h1>Tic Tae Toe</h1>  {/* heading */}

    {turn ? <span>Turn: {circle}</span> : <span>Turn: {cross}</span>} {/* If turn is true, it is "O". If it is false, it is "X" */}

    <div id='container'>
    <Card callback = {a} Icon={b()}/>
    <Card callback = {a} Icon={b()}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    <Card callback = {a}/>
    </div>    
    </>
  )
}

export default App
