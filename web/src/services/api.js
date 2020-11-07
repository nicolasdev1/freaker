import axios from 'axios'

const api = axios.create({
<<<<<<< HEAD
  baseURL: process.env.REACT_APP_API_URL
=======
  baseURL: 'http://localhost:3334/',
>>>>>>> a01f7ec4e743304a5f0ec87198af9028621c4690
})

export default api
