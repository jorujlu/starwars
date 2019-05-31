let initialState = {
    ships: [],
    pageNum: 1,
    loading: true,

}

const rootReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case 'LOAD_SHIPS':
            let ships = [...state.ships].concat(action.payload.ships);
            newState = { ...state, ships };
            break;
        case 'SET_LOADING':
            newState = { ...state, loading: action.payload.loading };
            break;
        case 'INCREMENT_PAGE_NUM':
            newState = { ...state, pageNum: action.payload.pageNum };
            break;
        default:
            return state;
    }
    return newState

}

export default rootReducer;