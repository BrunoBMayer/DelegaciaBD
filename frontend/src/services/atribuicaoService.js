import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAtribuicoes = () => axios.get(`${API_URL}/atribuicoes`);
export const createAtribuicao = (atrib) => axios.post(`${API_URL}/atribuicoes`, atrib);
export const updateAtribuicao = (id, dados) => axios.put(`${API_URL}/atribuicoes/${id}`, dados);
export const deleteAtribuicao = (id) => axios.delete(`${API_URL}/atribuicoes/${id}`);
