import axios from 'axios'

export function getAllProducts () {
    return axios.get(
        `http://localhost/products/list`
    )
}