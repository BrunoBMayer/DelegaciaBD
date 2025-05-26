import axios from "axios";

export const getFuncionarios = () => axios.get("/funcionarios");
export const getPessoas = () => axios.get("/pessoas");
export const getDenuncias = () => axios.get("/denuncias");
export const getProcessos = () => axios.get("/processos");
export const getAtribuicoes = () => axios.get("/atribuicoes");
export const getAtos = () => axios.get("/atos");
export const getEnvolvimentos = () => axios.get("/envolvimentos");