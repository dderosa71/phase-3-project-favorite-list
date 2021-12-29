import React from "react"
import {Route, NavLink, Link } from "react-router-dom";
import Button from "react-bootstrap/Button"


function Location({state, city, country, id, setPlaces}){

    function handleDelete(){
        fetch(`http://localhost:9292/locations/${id}`,{
            method: "DELETE"
        })
        setPlaces((currentPlaces)=> currentPlaces.filter((item) => item.id !== id ))
    }
    return(
     <div>
         <Link to={`/location/${id}/attractions`}> {city}, {state} - {country}
            </Link>
         <Button variant="danger" onClick={handleDelete}>Delete</Button>
     </div>
    )
}
export default Location