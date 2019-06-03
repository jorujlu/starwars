import * as actionTypes from "../actionTypes"

let initialState = {
    ships: [],
    people: [],
    pageNum: 1,
    loading: true,
    currentShip: null
}

const rootReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case actionTypes.LOAD_PEOPLE:
            newState = { ...state, people: action.payload.people }
            break;
        case actionTypes.LOAD_SHIPS:
            let ships = [...state.ships].concat(action.payload.ships);
            newState = { ...state, ships };
            break;
        case actionTypes.SET_LOADING:
            newState = { ...state, loading: action.payload.loading };
            break;
        case actionTypes.INCREMENT_PAGE_NUM:
            newState = { ...state, pageNum: action.payload.pageNum };
            break;
        case actionTypes.FETCH_SHIP:
            newState = { ...state, currentShip: action.payload.ship };
            break;
        default:
            return state;
    }
    return newState

}

export default rootReducer;