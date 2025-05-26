import { useState, useEffect } from "react";
import { TextField, Button, MenuItem, Grid, Paper } from "@mui/material";
import { getCorregedorias } from "../services/corregedoriaService";
import axios from "axios";

const tipos = ["Delegado", "Investigador", "Escrivao", "Secretaria", "Outro"];

async function gerarIdUnico(prefixo, endpoint) {
  let id;
  let existe = true;

  while (existe) {
    const numero = Math.floor(1000 + Math.random() * 9000);
    id = `${prefixo}${numero}`;

    try {
      const res = await axios.get(`http://localhost:8080/${endpoint}`);
      existe = res.data.some(item => item.matricula === id);
    } catch (e) {
      console.error("Erro ao verificar ID único:", e);
      break;
    }
  }

  return id;
}

export default function FuncionarioForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    tipoFuncionario: "Outro",
    fkCorregedoriaCnpj: ""
  });

  const [corregedorias, setCorregedorias] = useState([]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      gerarIdUnico("F", "funcionarios").then(idGerado => {
        setFormData(prev => ({ ...prev, matricula: idGerado }));
      });
    }
  }, [initialData, editing]);

  useEffect(() => {
    getCorregedorias().then(res => setCorregedorias(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      gerarIdUnico("F", "funcionarios").then(idGerado => {
        setFormData({ nome: "", matricula: idGerado, tipoFuncionario: "Outro", fkCorregedoriaCnpj: "" });
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="nome" label="Nome" value={formData.nome} onChange={handleChange} required sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="matricula" label="Matrícula" value={formData.matricula} disabled required sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth name="tipoFuncionario" label="Tipo" value={formData.tipoFuncionario} onChange={handleChange} sx={{ minWidth: 300 }}>
              {tipos.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth name="fkCorregedoriaCnpj" label="CNPJ da Corregedoria" value={formData.fkCorregedoriaCnpj} onChange={handleChange} sx={{ minWidth: 300 }}>
              {corregedorias.map((c) => (
                <MenuItem key={c.cnpj} value={c.cnpj}>{c.nome} ({c.cnpj})</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {editing ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}