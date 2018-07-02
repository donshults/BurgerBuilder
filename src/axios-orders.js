import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://tek-my-burger.firebaseio.com/'
    });

export default instance; 