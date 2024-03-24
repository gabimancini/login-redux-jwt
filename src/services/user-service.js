import axios from 'axios';
import { authHeader } from './auth-header';
// Add a HTTP header with the help of authHeader() function 
// when requesting authorized resource.
const API_URL = "https://localhos/8080/api/test";
const getPublicContent = () => {
    return axios.get(API_URL + "all")
}
const getBoardAdmin = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() })
}
const getBoardModerator = () => {
    return axios.get(API_URL + "moderator", { headers: authHeader() })
}
const getBoardUSer = () => {
    return axios.get(API_URL + "user", { headers: authHeader() })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getPublicContent, getBoardAdmin, getBoardModerator, getBoardUSer }