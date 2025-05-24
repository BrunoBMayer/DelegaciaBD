import { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

export default function PessoaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    id_pessoa: "",
    nome: "",
    CPF: "",
    outros_dados_identificacao: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      setFormData({
        id_pessoa: "",
        nome: "",
        CPF: "",
        outros_dados_identificacao: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID" name="id_pessoa" value={formData.id_pessoa} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="CPF" name="CPF" value={formData.CPF} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Outros dados" name="outros_dados_identificacao" value={formData.outros_dados_identificacao} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              {editing ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </Grid>
          {editing && (
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => onSubmit(null)}>
                Cancelar edição
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
}
