import axios from 'axios';
import Axios  from 'axios';

Axios.defaults.baseURL="https://fakestoreapi.com"
const http={
    get:axios.get,
    post:axios.post,
    delete:axios.delete,

}
export {http};