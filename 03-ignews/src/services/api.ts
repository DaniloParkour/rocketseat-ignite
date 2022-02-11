import axios from 'axios'

export const api = axios.create({
  baseURL: '/api' //Basta colocar "/api" que o axios aproveita a base_url da aplicação (a parte que não muda)
})
