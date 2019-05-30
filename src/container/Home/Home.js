import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Ships from "../Ships/Ships";
import ShipInfo from "../ShipInfo/ShipInfo";
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <header>
                    <nav>
                        <ul>
                            <li><Link to={"/ships/" + 1} >Home</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/ships/:pageNum" component={Ships} />
                    <Route path="/ship-info/:id" component={ShipInfo} />
                    <Redirect exact from="/" to={"/ships/" + 1} />
                </Switch>
            </div>
        )
    }
}

export default Home;