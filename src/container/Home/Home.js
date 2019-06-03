import { Route, Switch, Redirect } from 'react-router-dom';
import Ships from "../Ships/Ships";
import ShipInfo from "../ShipInfo/ShipInfo";
/** @jsx jsx */
import { jsx } from '@emotion/core'

const Home = () => {
    return (
        <div >
            <header>
                <h1 css={{ color: "#6200ee" }}>May The Force Be With You!</h1>
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