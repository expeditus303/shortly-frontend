import axios from "axios";

export default function getRanking() {
    return axios.get(`${process.env.REACT_APP_API_URL}/ranking`)
}