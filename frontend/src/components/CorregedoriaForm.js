import { useEffect, useState } from "react";
import { TextField, Grid, Button, Paper } from "@mui/material";

export default function CorregedoriaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    cnpj: "",
    nome: "",
    enderecoRua: "",
    enderecoBairro: "",
    enderecoCidade: ""
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
        cnpj: "",
        nome: "",
        enderecoRua: "",
        enderecoBairro: "",
        enderecoCidade: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="cnpj" label="CNPJ" value={formData.cnpj} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="nome" label="Nome" value={formData.nome} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth name="enderecoRua" label="Rua" value={formData.enderecoRua} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="enderecoBairro" label="Bairro" value={formData.enderecoBairro} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="enderecoCidade" label="Cidade" value={formData.enderecoCidade} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
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
