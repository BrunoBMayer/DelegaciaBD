import axios from "axios";

const API_URL = "http://localhost:8080";

export const getDenuncias = () => axios.get(`${API_URL}/denuncias`);
export const createDenuncia = (denuncia) => axios.post(`${API_URL}/denuncias`, denuncia);
export const updateDenuncia = (id, dados) => axios.put(`${API_URL}/denuncias/${id}`, dados);
export const deleteDenuncia = (id) => axios.delete(`${API_URL}/denuncias/${id}`);