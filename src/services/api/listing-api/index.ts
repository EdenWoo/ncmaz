import axios from 'axios';

export default axios.create({
    baseURL: 'https://app.apidae.co.nz/api/v1/'
});
