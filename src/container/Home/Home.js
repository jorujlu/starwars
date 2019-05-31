import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Ships from "../Ships/Ships";
import ShipInfo from "../ShipInfo/ShipInfo";
import "./Home.css"

const Home = () => {
    return (
        <div className="Home">
            <header>
                <h1>May The Force Be With You!</h1>
            </header>
            <Switch>
                <Route exact path="/ships" component={Ships} />
                <Route exact path="/ship-info/:id" component={ShipInfo} />
                <Redirect from="/" to="/ships" />
            </Switch>
        </div>
    )
}

export default Home;