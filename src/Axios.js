import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://www.fruityvice.com/api/fruit/genus/',
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json',
    }
});

export default Axios;
