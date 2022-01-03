import React, { useState } from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"


function Location({ state, city, country, id, setPlaces }) {
    const [editStatus, setEditStatus] = useState(false)
    const [editCity, setCity] = useState("");
    const [editState, setState] = useState("");
    const [editCountry, setCountry] = useState("");



    function toggleEdit() {
        setEditStatus(!editStatus)
    }

    //Some work to be done here.
    function handleEdit(){
        toggleEdit(!editStatus)
        fetch(`Need to figure this out`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "id": id,
                "city": editCity,
                "state": editState,
                "country": editCountry
            })
        })
    }

    const editForm =
        <>
             <form>
                <label>City</label>
                <input onChange={(event) => setCity(event.target.value)} value={editCity}></input>
                <br></br>
                <label>State</label>
                <input onChange={(event) => setState(event.target.value)} value={editState}></input>
                <br></br>
                <label>Country</label>
                <input onChange={(event) => setCountry(event.target.value)} value={editCountry}></input>
            </form>
            <Button variant="success" onClick={toggleEdit}>Save</Button>
            <br></br>
            <br></br>

        </>

    function handleDelete() {
        fetch(`http://localhost:9292/locations/${id}`, {
            method: "DELETE"
        })
        setPlaces((currentPlaces) => currentPlaces.filter((item) => item.id !== id))
    }
    return (
        <div>
            <Link to={`/location/${id}/attractions`}> {city}, {state} - {country}
            </Link>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
            {editStatus ? editForm : <></>}

        </div>
    )
}
export default Location