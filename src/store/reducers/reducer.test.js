import rootReducer from "./rootReducer";
import * as actionTypes from "../actionTypes";

describe("root reducer", () => {
    it("should return the intial state", () => {
        expect(rootReducer(undefined, {})).toEqual({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        })
    })

    it("should store the ships", () => {
        expect(rootReducer({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        }, {
            type: actionTypes.LOAD_SHIPS,
            payload: {
                ships: [
                    {
                        id: "some-id"
                    }
                ]
            }
        })).toEqual({
            ships: [{id: "some-id"}],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        })
    })

    it("should store people", () => {
        expect(rootReducer({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        }, {
            type: actionTypes.LOAD_PEOPLE,
            payload: {
                people: [
                    {
                        name: "darth vader"
                    }
                ]
            }
        })).toEqual({
            ships: [],
            people: [{name: "darth vader"}],
            pageNum: 1,
            loading: true,
            currentShip: null
        })
    })

    it("should set loading", () => {
        expect(rootReducer({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        }, {
            type: actionTypes.SET_LOADING,
            payload: {
                loading: false
            }
        })).toEqual({
            ships: [],
            people: [],
            pageNum: 1,
            loading: false,
            currentShip: null
        })
    })

    it("increment page number", () => {
        expect(rootReducer({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        }, {
            type: actionTypes.INCREMENT_PAGE_NUM,
            payload: {
                pageNum: 3
            }
        })).toEqual({
            ships: [],
            people: [],
            pageNum: 3,
            loading: true,
            currentShip: null
        })
    })

    it("set ship info", () => {
        expect(rootReducer({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: null
        }, {
            type: actionTypes.FETCH_SHIP,
            payload: {
                ship: {
                    id: 123
                }
            }
        })).toEqual({
            ships: [],
            people: [],
            pageNum: 1,
            loading: true,
            currentShip: {
                id: 123
            }
        })
    })
})