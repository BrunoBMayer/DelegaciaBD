// src/services/funcionarioService.js
import axios from "axios";

const API_URL = "http://localhost:8080"; // ajuste conforme seu backend

export const getFuncionarios = () => axios.get(`${API_URL}/funcionarios`);
export const createFuncionario = (funcionario) => axios.post(`${API_URL}/funcionarios`, funcionario);
export const updateFuncionario = (matricula, dados) => axios.put(`${API_URL}/funcionarios/${matricula}`, dados);
export const deleteFuncionario = (matricula) => axios.delete(`${API_URL}/funcionarios/${matricula}`);
