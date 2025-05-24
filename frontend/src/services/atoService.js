import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAtos = () => axios.get(`${API_URL}/atos`);
export const createAto = (ato) => axios.post(`${API_URL}/atos`, ato);
export const updateAto = (id, dados) => axios.put(`${API_URL}/atos/${id}`, dados);
export const deleteAto = (id) => axios.delete(`${API_URL}/atos/${id}`);
