import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Button() {
    let [num, change] = useState(0)

  useEffect(() => {
    console.log("lala");
  })
  function a() {
    console.log("called");
    change(num + 1)
    console.log(num);
  }

  return (
    <button className="bg-blue-950" onClick={a}>click</button>
  )
}

export default Button
