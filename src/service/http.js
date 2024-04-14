
import Axios  from 'axios';

Axios.defaults.baseURL="https://fakestoreapi.com"
const http={
    get:Axios.get,
    post:Axios.post,
    delete:Axios.delete,

}
export {http};