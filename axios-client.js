import axios from "axios";
import {AsyncStorage} from 'react-native';

const token = await AsyncStorage.getItem('ACCESS_TOKEN');

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
});


axiosClient.interceptors.request.use((AxiosRequestConfig) => {
    AxiosRequestConfig.headers.Authorization = `Bearer ${token}`;

    return AxiosRequestConfig;
})


axiosClient.interceptors.response.use((AxiosResponse) => {
    return AxiosResponse;
}, (error) => {
    try {
        const{response} = error;

        if(response === 401){
            AsyncStorage.removeItem('ACCESS_TOKEN')
        }
    } catch (e) {
        console.log(e);
    }throw error
})

export default axiosClient;