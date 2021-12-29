import React from "react"
import Button from "react-bootstrap/Button"

function Attraction({ type, name, notes, visited, id }) {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{notes}</td>
                <td>{type}</td>
                <td>{visited}</td>
                <Button>Delete</Button>
            </tr>
        </>
    )
}

export default Attraction