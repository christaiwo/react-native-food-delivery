import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const axiosClient = axios.create({
  baseURL: 'https://christaiwo.tk/api/v1',
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = {
    "Content-Type": "application/json",
    'Accept': "application/json",
    Authorization: `Bearer ${token}`,
  };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        await AsyncStorage.removeItem('ACCESS_TOKEN');
      }
    } catch (e) {
      console.log(e);
    }
    throw error;
  }
);

export default axiosClient;
