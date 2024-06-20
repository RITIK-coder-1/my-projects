import React, { useState } from 'react'
import Card from './components/Card' // imported the Card component
import { FaRegCircle } from "react-icons/fa6"; // the circle icon from react icons
import { RxCross2 } from "react-icons/rx"; // the cross icon from react icons

function App() {

  let circle = "O" // this represents the circle value
  let cross = "X" // this represents the cross value

  let [turn, changeTurn] = useState(true) // this indicates the turn value, if it is true, the turn will be "O" else "X". It is true by default
  let [cards, setCard] = useState(Array(9).fill(null)) // this stores an array of values to represent the state of cards, where each element represents the state of an individual card. Initially, the value is null so that no card is flipped

  // function to change the state of the turn -->

  function click(index){

    if (cards[index] !== null) return // if the current element of the array has a not-null value, stop listening to the user event
    let newCards = [...cards] // As the state of the original array shouldn't be changed in React, this copy of the original array stores all its elements and will get modified
    newCards[index] = turn ? FaRegCircle : RxCross2 // if turn is true, the current index value will hold the circle value, else the cross value
    setCard(newCards) // once the copy card has been updated, this function will update the original card
    changeTurn(!turn) // clicking any card would change the turn

  }

  return (
    <> 
    
    <h1>Tic Tae Toe</h1>  {/* heading */}

    {turn ? <span>Turn: {circle}</span> : <span>Turn: {cross}</span>} {/* If turn is true, it is "O". If it is false, it is "X" */}

    <div id='container'>

      {cards.map((ele, ind) => { {/* it iterates over the entire array, generating a new card. "ele" represents the current index value, which could either be a circle or a cross depending upon the turn. "ind" represents the index value of the element. The Icon gets the current value of the element, and the callback is triggered basis on the index value*/}
        return <Card key={ind} Icon={ele} callback={() => click(ind)}/>
      })}
      {/* As there are 9 elements in the array, 9 cards will be generated */}

    </div>    
  
    </>
  )
}

export default App
