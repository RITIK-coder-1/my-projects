import { useEffect } from "react"
import { useState } from "react"
import Button from "./components/Button";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto"

  let [name, change] = useState("")
  const api = fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data);
    return data
  })
  api.then(data => change(data.abilities[0].ability.name))

  return (
    <>
    <h1 className="text-3xl">{name}</h1>
    </>
  )
}

export default App
