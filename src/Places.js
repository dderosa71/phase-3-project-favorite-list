import React, { useEffect, useState } from "react"
import Location from "./Location"
import Button from 'react-bootstrap/Button';

function Places({ places, setPlaces }) {

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");


    function handleSave() {
        const newItem = 
        {"city": city,
        "state": state,
        "country": country,
        "id": places[places.length-1]["id"]+1
    
    }
        fetch('http://localhost:9292/locations', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem)
        })

        setPlaces((currentPlaces)=>[...currentPlaces, newItem ])
        setCity("")
        setState("")
        setCountry("")
    }
    
    const placesArray = places.map(item => (
        <Location
            key={item.id}
            city={item.city}
            state={item.state}
            country={item.country}
            id={item.id}
            setPlaces={setPlaces}
        />
    ))

    return (
        <>
        <h1>Oh, the Places You'll Go!</h1>
            {placesArray}
            <form>
                <label>City</label>
                <input onChange={(event) => setCity(event.target.value)} value={city}></input>
                <br></br>
                <label>State</label>
                <input onChange={(event) => setState(event.target.value)} value={state}></input>
                <br></br>
                <label>Country</label>
                <input onChange={(event) => setCountry(event.target.value)} value={country}></input>
            </form>
            <Button variant="Success" onClick={handleSave}>Add</Button>
        </>
    )
}

export default Places;