import axios from "axios";

const backendAPI = "http://localhost:4000/api";

const tellTravelersTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "content-type": "application/json"
    }
})


export default tellTravelersTo;