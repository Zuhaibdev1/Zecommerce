/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import cookies from 'src/utils/cookies';

// ** Config
// import authConfig from 'src/config/auth'

const instance = axios.create({
    baseURL: "http://localhost:5000",
    // timeout: 500000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
// Add a request interceptor
instance.interceptors.request.use(function (config: any) {

    const storedToken = cookies.get("accessToken")
    // console.log(storedToken)
    return {
        ...config,
        headers: {
            authorization: storedToken ? `Bearer ${storedToken}` : null,
        },
    };
});

export default instance;