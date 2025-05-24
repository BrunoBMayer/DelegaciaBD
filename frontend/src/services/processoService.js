import axios from "axios";

const API_URL = "http://localhost:8080";

export const getProcessos = () => axios.get(`${API_URL}/processos`);
export const createProcesso = (processo) => axios.post(`${API_URL}/processos`, processo);
export const updateProcesso = (id, dados) => axios.put(`${API_URL}/processos/${id}`, dados);
export const deleteProcesso = (id) => axios.delete(`${API_URL}/processos/${id}`);
