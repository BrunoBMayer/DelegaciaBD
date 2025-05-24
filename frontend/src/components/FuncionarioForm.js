import { useState, useEffect } from "react";
import { TextField, Button, MenuItem, Grid, Paper } from "@mui/material";

const tipos = ["Delegado", "Investigador", "Escrivao", "Secretaria", "Outro"];

export default function FuncionarioForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    tipo_funcionario: "Outro",
    fk_Corregedoria_CNPJ: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      setFormData({
        nome: "",
        matricula: "",
        tipo_funcionario: "Outro",
        fk_Corregedoria_CNPJ: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="nome" label="Nome" value={formData.nome} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="matricula" label="Matrícula" value={formData.matricula} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth name="tipo_funcionario" label="Tipo" value={formData.tipo_funcionario} onChange={handleChange}>
              {tipos.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="fk_Corregedoria_CNPJ" label="CNPJ Corregedoria" value={formData.fk_Corregedoria_CNPJ} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {editing ? "Salvar alterações" : "Cadastrar"}
              {editing && (
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    color="secondary"
                    onClick={() => {
                      setFormData({
                        nome: "",
                        matricula: "",
                        tipo_funcionario: "Outro",
                        fk_Corregedoria_CNPJ: ""
                      });
                      onSubmit(null); // ou chame uma função de cancelamento, se preferir
                    }}
                  >
                    Cancelar edição
                  </Button>
                </Grid>
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
