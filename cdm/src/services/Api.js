//Se você não entender, não mexa 
import axios from 'axios';

// URL base da API
export const API = axios.create({

    baseURL: 'https://mangahook-api.vercel.app/mangalist'

});
