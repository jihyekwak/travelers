import tellTravelersTo from "./axios.config";

const users="/users"

const getAll = () => {
    return tellTravelersTo.get(`${users}`);
}

const create = (data) => {
    return tellTravelersTo.post(`${users}`, data);
}


export { getAll, create }