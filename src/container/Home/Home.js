import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Ships from "../Ships/Ships";
import ShipInfo from "../ShipInfo/ShipInfo";
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    render () {
        return (
            <div className="Home">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Ships} />
                <Route path="/ship-info" component={ShipInfo} />
            </div>
        )
    }
}

export default Home;