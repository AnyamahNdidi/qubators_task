import axios from "axios";

const url = "https://quobators.herokuapp.com/api/all"
const searchUrl = "https://quobators.herokuapp.com/api?search="

export const myall= () => axios.get(url)
export const mySearch= () => axios.get(searchUrl)

