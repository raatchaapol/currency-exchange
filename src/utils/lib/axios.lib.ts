import axios from 'axios'

const { API_URL } = process.env;

const config = {
   baseURL: API_URL || 'https://api.exchangerate.host',
   timeout: 20000
}

const instance = axios.create(config)

export const httpClient = instance
