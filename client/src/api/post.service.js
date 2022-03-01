import tellTravelersTo from "./axios.config";

const posts="/posts"

const getAll = () => {
    return tellTravelersTo.get(`${posts}`);
}

const get = (id) => {
    return tellTravelersTo.get(`${posts}/${id}`)
}


const create = (data) => {
    return tellTravelersTo.post(`${posts}`, data);
}

const createComment = (id, data) => {
    return tellTravelersTo.post(`${posts}/${id}/comments`, data)
}


export { getAll, get, create, createComment}