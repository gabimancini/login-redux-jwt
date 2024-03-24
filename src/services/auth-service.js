import axios from "axios";
const API_URL = "https://localhos/8080/api/auth";
// Para interactuar con estos servidores, podemos hacer 
// uso de diferentes métodos HTTP para solicitar datos
// Enviar info cuando me registro y cuando me logueo
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
// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout }