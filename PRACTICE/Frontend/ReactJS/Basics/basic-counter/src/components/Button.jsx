import React from 'react'

// button component -->

function Button({label, color, hoverColor, func}) {
  return (
    <button type="button" className={`text-white ${color} p-2 rounded h-6 w-6 flex justify-center items-center font-bold hover:${hoverColor}`} onClick={func}>{label}</button>
  )

  // the content, color and the event fucntion are dynamic, and can be changed based on our requirement of the page
}

export default Button
