import axios from "axios";
const API_URL = "https://localhos/8080/api/auth";
// Enviar info
const register = (username, mail, password) => {
    return axios.post(API_URL + "register", {
        username,
        mail,
        password
    })

}
const login = async (username, password) => {
    const response = await axios.post(API_URL + "login", {
        username,
        password
    });
    if (response.data.accessToken) localStorage("user", JSON.stringify(response.data));
    return response.data;
}
const logout = () => {
    localStorage.removeItem("user")
}
export default { register, login, logout }