import React from "react"
import Attraction from "./Attraction.js"
import AddAttraction from "./AddAttraction.js";
import { useParams, Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import {useState} from "react"

function Attractions({ places }) {

  // const [type, setType] = useState('')
  // const [notes, setNotes] = useState('')
  // const [attractionState, setAttraction] = useState('')
  const slug = useParams()
  const slugId = parseInt(slug.id) - 1
  console.log(slugId)
  const location = places[slugId]
  console.log(location)
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

  return (
    <>
      <h2>{location.state}, {location.city} - {location.country}</h2>
      <Link to="/">
           <Button variant="outline-primary" >Home</Button>
      </Link>
      <table>
      <tbody>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Type</th>
          <th>Notes</th>
        </tr>
        {attractionArray}
        </tbody>
      </table>
      <br></br>
      <h3>Add a New Attraction</h3>

      <AddAttraction location_id={slugId}/>
      {/* <form>
        <label>Type</label>
        <input onChange={(event) => setType(event.target.value)} value={type}></input>
        <br></br>
        <label>notes</label>
        <input onChange={(event) => setNotes(event.target.value)} value={notes}></input>
        <br></br>
        <label>Attractions</label>
        <input onChange={(event) => setAttraction(event.target.value)} value={attractionState}></input>
      </form>
      <Button variant="success" onClick={handleSubmit}>Save</Button> */}

    </>
  )
}

export default Attractions