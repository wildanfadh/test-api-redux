import axios from "axios";
// import { anggorApi } from "../../api";
// get api from env
const anggorApi = process.env.REACT_APP_API_URL;

const AuthService = {
    login: async (username, password) => {
        const response = await axios
            .post(anggorApi + "login", {
                username,
                password
            });
        console.log("response: ", response.data);
        if (response.data.status === "success") {
            localStorage.setItem("userSignin", JSON.stringify(response.data.user));
            // set token to localStorage
            // localStorage.setItem("token", response.data.token);
            // set token to cookie
            document.cookie = "x-access-token=" + response.data.token;
        } else {
            throw new Error(response.data.message);
        }
        return response.data;
    },

    logout: () => {
        localStorage.removeItem("userSignin");
        document.cookie = "x-access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // remove token from cookie
    },

    register: async (username, name, email, password) => {
        return await axios.post(anggorApi + "register", {
            id_group: null,
            username,
            name,
            email,
            password
        });
    },

    getCurrenUser: () => {
        return JSON.parse(localStorage.getItem('userSignin'));
        // return cookie.get("userSignin");
    }


};

export default AuthService;