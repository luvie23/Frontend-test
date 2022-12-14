import axios from "axios";
import Flight from "../components/Flight";

const baseUrl = 'https://api.spacexdata.com/v4/launches/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }