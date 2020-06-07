import axios from "axios";

export const API_CONSTANTS = {

}

export const instance = axios.create({
    baseURL: 'https://mailer-send.herokuapp.com/'
})
