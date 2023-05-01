import axios from "axios";
 
window.axios = axios;
 
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
// window.axios.defaults.baseURL = "http://parkingapi.test/api/v1"; Take from the url of the laravel Api end 
window.axios.defaults.baseURL = "http://carparkapp.test/api/v1";