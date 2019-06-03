import React, { Component } from "react";
import { connect } from "react-redux"

/** @jsx jsx */
import { jsx } from '@emotion/core'

class ShipInfo extends Component {

    componentDidMount() {
        const baseURL = "https://swapi.co/api/starships/";
        fetch(baseURL + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data.headers);

                this.props.fetchShip(data);
            }).catch(e => console.warn(e.message));
    }

    render() {

        let shipInfo = <p>No ship found</p>

        if (this.props.currentShip) {
            shipInfo = this.props.currentShip;
        }
        
        return (
            <div
                css={{
                    backgroundColor: "#6200ee",
                    position: "absolute",
                    width: "50%",
                    height: "50%",
                    margin: "auto",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    left: "0",
                    borderRadius: "5px",
                    color: "#fff",
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
                }}>
                <h1>{shipInfo.name}</h1>
                <p>Model:   {shipInfo.model}</p>
                <p>Manufacturer:   {shipInfo.manufacturer}</p>
                <p>Created:   {shipInfo.created}</p>
            </div >
        );

    }
}

const mapPropsToState = (state) => {
    return {
        currentShip: state.currentShip
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShip: shipInfo => dispatch({
            type: "FETCH_SHIP",
            payload: {
                ship: shipInfo
            }
        })
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ShipInfo);