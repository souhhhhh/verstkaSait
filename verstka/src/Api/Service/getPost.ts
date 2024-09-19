import axios from "axios"
import { ServiceType } from "../types/service.type"

//если бы переменных было больше, вынес бы в папку const
const POSTS = 'todos'
const SERVER_URL = 'https://jsonplaceholder.typicode.com/'

export const getPost = { 

  async getAllPost () { 
    const { data } = await axios.get<ServiceType[]>(`${SERVER_URL}${POSTS}`)
    return data
  }

}