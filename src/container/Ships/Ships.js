import React, { Component } from "react";
import Ship from "../../components/Ship/Ship"
import { Link } from "react-router-dom";
import api from "../../api";
class Ships extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            page: null
        };
    }

    componentDidMount() {
        const page_num = this.props.match.params.pageNum;
        fetch("https://swapi.co/api/starships/?page=" + page_num)
            .then(response => response.json())
            .then(data => this.setState({ships: data.results}));
    }

    render() {
        return (
            <div>
                {
                    this.state.ships.map(ship =>
                        <Link to="/ship-info" >
                            <Ship name={ship.name} model={ship.model} manufacturer={ship.manufacturer} />
                        </Link>
                    )
                }
                <button>prev</button>
                <button>next</button>
            </div>
        )
    }
}

export default Ships;