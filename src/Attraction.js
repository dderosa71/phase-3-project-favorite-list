import React from "react"
import Button from "react-bootstrap/Button"


function Attraction({type, name, notes, visited, id}){
    // function handleDelete(){
    //     fetch('')
    // }
    return(
        <tr>
        <td>{type}</td>
        <td>{notes}</td>
        <td>{name}</td>
        <td>{visited}</td>
        <td>{id}</td>
        <Button>Delete</Button>
      </tr>
    )
}

export default Attraction