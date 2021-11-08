import axios from 'axios'

// const port = 'https://hk-solutions-accounting-app.herokuapp.com/'
const port = process.env.REACT_APP_PORT || 'http://localhost:5000'

export const baseURL = axios.create({
    baseURL: port,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // 'Origin': port
    },
})