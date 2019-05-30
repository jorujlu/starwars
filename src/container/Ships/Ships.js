import React, { Component } from "react";
import Ship from "../../components/Ship/Ship"
import { Link } from "react-router-dom";

class Ships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [
                {
                    "id": "aa",
                    "name": "AAA",
                    "model": "2.0.0",
                    "manufacturer": "BMW"
                },
                {
                    "id": "bb",
                    "name": "BBB",
                    "model": "2.0.0",
                    "manufacturer": "Mercedes"
                },
                {
                    "id": "cc",
                    "name": "CCC",
                    "model": "2.0.0",
                    "manufacturer": "Audi"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.ships.map(ship =>
                        <Link to="/ship-info" key={ship.id}>
                            <Ship name={ship.name} model={ship.model} manufacturer={ship.manufacturer} />
                        </Link>
                    )
                }
            </div>
        )
    }
}

export default Ships;