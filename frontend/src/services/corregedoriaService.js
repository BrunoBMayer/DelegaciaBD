import axios from "axios";

const API_URL = "http://localhost:8080";

export const getCorregedorias = () => axios.get(`${API_URL}/corregedorias`);
export const createCorregedoria = (corregedoria) => axios.post(`${API_URL}/corregedorias`, corregedoria);
export const updateCorregedoria = (cnpj, dados) => axios.put(`${API_URL}/corregedorias/${cnpj}`, dados);
export const deleteCorregedoria = (cnpj) => axios.delete(`${API_URL}/corregedorias/${cnpj}`);
