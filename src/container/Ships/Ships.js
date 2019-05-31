import React, { Component } from "react";
import Ship from "../../components/Ship/Ship"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './Ships.css'
class Ships extends Component {

    // loadData = (currentPage) => {
    //     fetch("https://swapi.co/api/starships/?page=" + currentPage)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (!lodash.isEqual(data.results, this.state.ships)) {
    //                 this.setState({ ships: data.results, pageNum: currentPage, loading: false });
    //             }
    //         }).catch(e => console.log(e));
    // };

    loadDataOnScroll = () => {
        console.log('here');
        
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
                    this.props.setLoading(false);
                    
                }).catch(e => console.log(e));
        }
    }

    componentDidMount() {
        console.log('Mounting');

        window.addEventListener('scroll', this.onScroll, false);
        // const currentPage = parseInt(this.props.match.params.pageNum);
        // if (currentPage < 1 || currentPage > 4) {
        //     this.props.history.push('/ships/1');
        // } else {
        this.loadDataOnScroll();
        // }
    }


    // componentDidUpdate() {
    //     const currentPage = parseInt(this.props.match.params.pageNum);
    //     if (currentPage < 1 || currentPage > 4) {
    //         this.props.history.push('/ships/1');
    //     } else {
    //         this.loadData(currentPage);
    //     }
    // }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }


    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight)
        ) {
            // this.setState({ loading: true })

            this.loadDataOnScroll();
            // console.log("here")
        }
    }

    // prevClickHandler = () => {
    //     if (this.state.pageNum > 1) {
    //         this.setState({ loading: true });
    //         let prevPage = this.state.pageNum - 1;
    //         this.props.history.push("/ships/" + prevPage);
    //         this.setState((prevState, props) => {
    //             return { pageNum: prevState.pageNum - 1 };
    //         });
    //     }
    // }

    // nextClickHandler = () => {
    //     if (this.state.pageNum < 4) {
    //         this.setState({ loading: true });
    //         let nextPage = this.state.pageNum + 1;
    //         this.props.history.push("/ships/" + nextPage);
    //         this.setState((prevState, props) => {
    //             return { pageNum: prevState.pageNum + 1 };
    //         });
    //     }
    // }

    render() {
        const { ships, loading } = this.props;
        console.log(this.props.pageNum);
        console.log(ships);
        




        let shipCards = (ships.map(ship =>
            <Link key={ship.id} to={"/ship-info/" + ship.id} >
                <Ship name={ship.name} model={ship.model} manufacturer={ship.manufacturer} />
            </Link>
        ));

        return (
            <div>
                {/* <button disabled={pageNum === 1} onClick={this.prevClickHandler}>prev</button>
                <button disabled={pageNum === 4} onClick={this.nextClickHandler}>next</button> */}
                {shipCards}
                <div className="Spinner-Container">
                    {loading ? <div className="lds-dual-ring"></div> : <h3 style={{ marginTop: "50px" }}>We are out of ships... :(</h3>}
                </div>
            </div>
        )
    }
}
const mapDispachToProps = dispatch => {
    return {
        loadShips: (ships) => dispatch({ type: "LOAD_SHIPS", payload: { ships } }),
        setLoading: (loading) => dispatch({ type: "SET_LOADING", payload: { loading } }),
        incrementPageNum: (pageNum) => dispatch({ type: "INCREMENT_PAGE_NUM", payload: { pageNum } }),
    }
}

const mapPropsToState = state => {
    return {
        ships: state.ships,
        pageNum: state.pageNum,
        loading: state.loading
    }
}

export default connect(mapPropsToState, mapDispachToProps)(Ships);