import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import axios from "axios";

async function gerarIdUnico(prefixo, endpoint) {
  let id;
  let existe = true;

  while (existe) {
    const numero = Math.floor(1000 + Math.random() * 9000);
    id = `${prefixo}${numero}`;

    try {
      const res = await axios.get(`http://localhost:8080/${endpoint}`);
      existe = res.data.some(p => p.idPessoa === id);
    } catch (e) {
      console.error("Erro ao verificar ID único:", e);
      break;
    }
  }

  return id;
}

export default function PessoaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idPessoa: "",
    nome: "",
    cpf: "",
    outrosDadosIdentificacao: ""
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      gerarIdUnico("P", "pessoas").then(idGerado => {
        setFormData(prev => ({ ...prev, idPessoa: idGerado }));
      });
    }
  }, [initialData, editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      gerarIdUnico("P", "pessoas").then(idGerado => {
        setFormData({ idPessoa: idGerado, nome: "", cpf: "", outrosDadosIdentificacao: "" });
      });
    }
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="ID da Pessoa"
              name="idPessoa"
              fullWidth
              required
              value={formData.idPessoa}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome"
              name="nome"
              fullWidth
              required
              value={formData.nome}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CPF"
              name="cpf"
              fullWidth
              required
              value={formData.cpf}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Outros Dados de Identificação"
              name="outrosDadosIdentificacao"
              fullWidth
              value={formData.outrosDadosIdentificacao}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              {editing ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}