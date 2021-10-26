import axios from "axios";

export default axios.create({
    baseURL: "http://eulerity-hackathon.appspot.com",
    headers: {
        "Content-type": "application/json"
    }
})