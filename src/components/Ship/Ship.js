import React from "react";
import "./Ship.css"

const ship = props => {
    return (
        <div className="Ship">
            <h3>{props.name}</h3>
            <p>{props.model}</p>
            <p>{props.manufacturer}</p>
        </div>
    )
}

export default ship;