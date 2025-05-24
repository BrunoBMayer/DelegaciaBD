import axios from "axios";

const API_URL = "http://localhost:8080";

export const getEnvolvimentos = () => axios.get(`${API_URL}/envolvimentos`);
export const createEnvolvimento = (envolvimento) => axios.post(`${API_URL}/envolvimentos`, envolvimento);
export const updateEnvolvimento = (id, dados) => axios.put(`${API_URL}/envolvimentos/${id}`, dados);
export const deleteEnvolvimento = (id) => axios.delete(`${API_URL}/envolvimentos/${id}`);
