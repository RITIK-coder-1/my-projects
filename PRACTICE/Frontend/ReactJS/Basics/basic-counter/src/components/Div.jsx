import React from 'react'
import Button from './Button'

// Div component -->

function Div({label1, color1, hoverColor1, label2, color2, hoverColor2, func1, func2}) {
  return (
    <div className='flex justify-center items-center gap-5'>
      <Button label={label1} color={color1} hoverColor={hoverColor1} func={func1}/>
      <Button label={label2} color={color2} hoverColor={hoverColor2} func={func2}/>
    </div>
  )
}

// This Div component contains the buttons and also, decides the indiviudal button styles and content

export default Div
