import axios from "axios";

const API_URL = "http://localhost:8080"; // ajuste se necessário

export const getPessoas = () => axios.get(`${API_URL}/pessoas`);
export const createPessoa = (pessoa) => axios.post(`${API_URL}/pessoas`, pessoa);
export const updatePessoa = (id, dados) => axios.put(`${API_URL}/pessoas/${id}`, dados);
export const deletePessoa = (id) => axios.delete(`${API_URL}/pessoas/${id}`);