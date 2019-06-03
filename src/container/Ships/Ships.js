import React, { Component } from "react";
import Ship from "../../components/Ship/Ship"
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as actionTypes from "../../store/actionTypes"

import './Ships.css'
export class Ships extends Component {

    loadDataOnScroll = () => {
        if (this.props.pageNum < 5) {
            this.props.setLoading(true);
            fetch("https://swapi.co/api/starships/?page=" + this.props.pageNum)
                .then(response => response.json())
                .then(data => {
                    let ships = data.results.map(ship => {
                        let url = ship.url.split('/');
                        let id = url[url.length - 2];
                        ship.id = id;
                        return ship;
                    });
                    this.props.incrementPageNum(this.props.pageNum + 1);
                    this.props.loadShips(ships);
                    fetch("https://swapi.co/api/people/")
                        .then(response => response.json())
                        .then(data => {
                            this.props.loadPeople(data.results);
                            this.props.setLoading(false);
                        }).catch(e => console.log(e));

                }).catch(e => console.log(e));
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        this.loadDataOnScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }


    onScroll = () => {
        if (!this.props.loading) {
            if (
                (window.innerHeight + window.scrollY) >= (document.body.offsetHeight)
            ) {
                this.loadDataOnScroll();
            }
        }

    }
    render() {
        const { ships, loading, people } = this.props;

        let shipCards = null;
        if (people.length > 0 && ships.length > 0) {
            shipCards = (ships.map((ship, index) =>
                (index % 8 === 0 && index !== 0) ?
                    <React.Fragment key={ship.id}>
                        <h1>{people[index % 10].name}</h1>
                        <NavLink
                            css={{
                                textDecoration: "none",
                                display: "block",
                                margin: "auto",
                                width: "50%",
                                height: "150px",
                                marginTop: "20px"
                            }}
                            to={"/ship-info/" + ship.id} >
                            <Ship name={ship.name} model={ship.model} manufacturer={ship.manufacturer} />
                        </NavLink>
                    </React.Fragment> :

                    <NavLink
                        css={{
                            textDecoration: "none",
                            display: "block",
                            margin: "auto",
                            width: "50%",
                            height: "150px",
                            marginTop: "40px"
                        }}
                        key={ship.id}
                        to={"/ship-info/" + ship.id} >
                        <Ship name={ship.name} model={ship.model} manufacturer={ship.manufacturer} />
                    </NavLink>));
        }

        return (
            <React.Fragment>
                {shipCards}
                {loading ? <div className="lds-dual-ring"></div> : <h1>We are out of ships... :(</h1>}
            </React.Fragment>
        )
    }
}
const mapDispachToProps = dispatch => {
    return {
        loadPeople: (people) => dispatch({ type: actionTypes.LOAD_PEOPLE, payload: { people } }),
        loadShips: (ships) => dispatch({ type: actionTypes.LOAD_SHIPS, payload: { ships } }),
        setLoading: (loading) => dispatch({ type: actionTypes.SET_LOADING, payload: { loading } }),
        incrementPageNum: (pageNum) => dispatch({ type: actionTypes.INCREMENT_PAGE_NUM, payload: { pageNum } }),
    }
}

const mapPropsToState = state => {
    return {
        people: state.people,
        ships: state.ships,
        pageNum: state.pageNum,
        loading: state.loading
    }
}

export default connect(mapPropsToState, mapDispachToProps)(Ships);