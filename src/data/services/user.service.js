import axios from "axios";
import authHeader from "../../config/middleware/auth-header";
import { anggorApi } from "../../api";

class UserService {
    getPublicContent() {
        return axios.get(anggorApi.get("/users"));
    }

    getUserBoard() {
        return axios.get(anggorApi.get("/users"), { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(anggorApi.get("/users"), { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(anggorApi.get("/users"), { headers: authHeader() });
    }
}


export default new UserService();