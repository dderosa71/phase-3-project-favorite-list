import React from "react"
import Attraction from "./Attraction.js"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import {useState} from "react"


function Attractions({ places }) {

  const [type, setType] = useState('')
  const [notes, setNotes] = useState('')
  const [attractionState, setAttraction] = useState('')
  const slug = useParams()
  const slugId = parseInt(slug.id) - 1
  const location = places[slugId]
  const attraction = location.attractions
  const attractionArray = attraction.map(item => (
    <Attraction
      key={item.id}
      type={item.attraction_type}
      notes={item.notes}
      name={item.name}
      visited={item.visited}
      id={item.id}
    />
  ))

  // function handleSubmit(){
  //   fetch('localhost:9292/', {
  //     method: 'POST',
  //     headers:{"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       "name": attractionState,
  //       "attraction_type": type,
  //       "notes": notes
  //     })
  //   })
  // }

  return (
    <>
      <h2>{location.state}, {location.city} - {location.country}</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>notes</th>
          <th>Attractions</th>
        </tr>
        {attractionArray}
      </table>
      <br></br>
      <p>Add a New Attraction</p>
      <form>
        <label>Type</label>
        <input onChange={(event) => setType(event.target.value)} value={type}></input>
        <br></br>
        <label>notes</label>
        <input onChange={(event) => setNotes(event.target.value)} value={notes}></input>
        <br></br>
        <label>Attractions</label>
        <input onChange={(event) => setAttraction(event.target.value)} value={attractionState}></input>
      </form>
      <Button variant="success" >Save</Button>

    </>
  )
}

export default Attractions