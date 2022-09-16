import axios from 'axios';

const URL = 'https://oril-coins-test.herokuapp.com'
const api = axios.create({baseURL:URL})
export async function getData(){
    const response = await api.get('/list')
    return response.data
} 