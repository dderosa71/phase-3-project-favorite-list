import React from "react";
import { useState } from "react"
import Button from "react-bootstrap/Button";

function AddAttraction() {

    function handleSubmit(){
        const newItem = {
          "name": attractionState,
          "attraction_type": type,
          "notes": notes
        }
    
        fetch('http://localhost:9292/attractions', {
          method: 'POST',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(newItem)
        })
        // setPlaces((currentPlaces)=>[...currentPlaces, newItem ])
        // setType("")
        // setNotes("")
        // setAttractions("")
      }
      
    const [type, setType] = useState('')
    const [notes, setNotes] = useState('')
    const [attractionState, setAttraction] = useState('')
    return (
        <>
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
            <Button variant="success" onClick={handleSubmit}>Save</Button>
        </>)
}

export default AddAttraction