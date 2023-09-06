import axios, { AxiosInstance } from 'axios';

type singOutFn = () => void;

type APIInstanceProps = AxiosInstance & {
	registerInterceptTokenManager: (singOut: singOutFn) => () => void;
};

export const api = axios.create({
	baseURL: 'http://192.168.1.222:3333',
}) as APIInstanceProps;
