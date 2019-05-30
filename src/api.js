
const BASE_URL = "https://swapi.co/api/";

let getShips = (page) => {
    fetch(BASE_URL + "starships/?page=" + page)
        .then(response => console.log(response.json()))
}

const api = {
    getShipsForPage: (page) => getShips(page),

}

export default api;