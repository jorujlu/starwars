import React, { Component } from "react";
import { connect } from "react-redux"
import * as actionTypes from "../../store/actionTypes"

/** @jsx jsx */
import { jsx } from '@emotion/core'

export class ShipInfo extends Component {

    componentDidMount() {
        this.props.setLoading(true);
        const baseURL = "https://swapi.co/api/starships/";
        fetch(baseURL + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.props.fetchShip(data);
                this.props.setLoading(false);
            }).catch(e => console.warn(e.message));
    }

    componentWillUnmount() {
        this.props.fetchShip(null);
    }

    render() {
        const { loading } = this.props;

        let shipInfo = <p>Could not find the ship!</p>

        if (this.props.currentShip) {
            shipInfo = this.props.currentShip;
        }

        return (
            loading ? <div className="lds-dual-ring"></div> :
                (<div
                    css={{
                        backgroundColor: "#6200ee",
                        position: "absolute",
                        width: "50%",
                        height: "500px",
                        margin: "auto",
                        top: "0",
                        bottom: "0",
                        right: "0",
                        left: "0",
                        borderRadius: "5px",
                        color: "#fff",
                        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                        textAlign: "left",
                        padding: "20px"
                    }}>
                    <h1 css={{ textAlign: "center" }}>{shipInfo.name}</h1>
                    <div css={{ display: "flex" }}>
                        <div css={{ width: "40%" }}>
                            <p><b>Model:</b></p>
                            <p><b>Manufacturer:</b></p>
                            <p><b>Created:</b></p>
                            <p><b>Starship Class:</b></p>
                            <p><b>Cargo Capacity:</b></p>
                            <p><b>Consumables:</b></p>
                            <p><b>Hyperdrive Rating:</b></p>
                            <p><b>Crew:</b></p>
                            <p><b>Cost In Credits</b></p>
                            <p><b>Max Atmosphering Speed</b></p>
                            <p><b>Passengers</b></p>
                        </div>
                        <div css={{ flexGrow: "1" }}>
                            <p>{shipInfo.model}</p>
                            <p>{shipInfo.manufacturer}</p>
                            <p>{shipInfo.created}</p>
                            <p>{shipInfo.starship_class}</p>
                            <p>{shipInfo.cargo_capacity}</p>
                            <p>{shipInfo.consumables}</p>
                            <p>{shipInfo.hyperdrive_rating}</p>
                            <p>{shipInfo.crew}</p>
                            <p>{shipInfo.cost_in_credits}</p>
                            <p>{shipInfo.max_atmosphering_speed}</p>
                            <p>{shipInfo.passengers}</p>
                        </div>
                    </div>
                </div >)
        );

    }
}

const mapPropsToState = (state) => {
    return {
        currentShip: state.currentShip,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShip: shipInfo => dispatch({
            type: actionTypes.FETCH_SHIP,
            payload: {
                ship: shipInfo
            }
        }),
        setLoading: (loading) => dispatch({ type: actionTypes.SET_LOADING, payload: { loading } }),
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ShipInfo);