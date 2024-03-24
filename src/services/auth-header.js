/*We also have methods for retrieving data from server. 
In the case we access protected resources, the HTTP request 
needs Authorization header.
Let’s create a helper function called authHeader() inside auth-header.js:
*/
const authHeader = ()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        return {Autorization: "Bearer" + user.accessToken}
    }else{
        return {}
    }
}
export default authHeader;
/*The code above checks Local Storage for user item.
 If there is a logged in user with accessToken (JWT), 
 return HTTP Authorization header. Otherwise, return an empty object.*/