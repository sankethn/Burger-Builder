import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-dd2f1-default-rtdb.firebaseio.com/'
})

export default instance;