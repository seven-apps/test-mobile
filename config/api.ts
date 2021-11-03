import axios from 'axios'

import { TOKEN, API_URL } from '../env'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
})

export default api