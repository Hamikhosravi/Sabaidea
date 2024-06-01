import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Interceptor
const itemClient = axios.create({
    baseURL: '/mockData',
    headers: {
        'Authorization': 'Bearer Token',
        'Content-Type': 'application/json',
    },
});

export const itemRequest = async <T>(options: AxiosRequestConfig): Promise<T> => {
    const onSuccess = (response: AxiosResponse<T>): T => response.data;
    const onError = (error: AxiosError): never => {
        throw error;
    };

    try {
        const response = await itemClient(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error as AxiosError);
    }
};
