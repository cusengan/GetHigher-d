import { LOGGED_IN, REGISTER_USER } from './actionTypes';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8080/user';

export function registerUser(user) {
    const url = `${ROOT_URL}/register`;
    const request = axios.post(url, user);

    return {
        type: REGISTER_USER,
        payload: request
    }
}