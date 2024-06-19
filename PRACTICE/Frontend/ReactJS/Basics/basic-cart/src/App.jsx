import React from 'react'
import { useState } from 'react'

function App() {
  let [currentItemNumber, increaseNumber] = useState(2) // this keeps track of the item number
  const [arr, addEle] = useState(["Item 1", "Item 2"]) // the array of items


  // this function adds a new item with incremented item number whenever called -->

  function addItem() {
    increaseNumber(prevNumber => {
      const newNumber = ++prevNumber // it increases the previous number
      addEle([...arr, `Item ${newNumber}`]) // it pushes a new value to the array
      return newNumber // returns the new item number
    })
  }

  return (
    <>
      <ul>
        {
          arr.map((ele, index) => {
            return <li key={index}>{ele}</li> // returning each element within a list item // the index number is acting as the key
          })
        }
      </ul>
      <button type="button" onClick={addItem}>Add New Item</button>
    </>
  )
}

export default App
