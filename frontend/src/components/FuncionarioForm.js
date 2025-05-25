import { useState, useEffect } from "react";
import { TextField, Button, MenuItem, Grid, Paper } from "@mui/material";

const tipos = ["Delegado", "Investigador", "Escrivao", "Secretaria", "Outro"];

export default function FuncionarioForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    tipoFuncionario: "Outro",
    fkCorregedoriaCNPJ: ""
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
        tipoFuncionario: "Outro",
        fkCorregedoriaCNPJ: ""
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
            <TextField select fullWidth name="tipoFuncionario" label="Tipo" value={formData.tipoFuncionario} onChange={handleChange}>
              {tipos.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name="fkCorregedoriaCNPJ" label="CNPJ Corregedoria" value={formData.fkCorregedoria_CNPJ} onChange={handleChange} required />
          </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                {editing ? "Salvar alterações" : "Cadastrar"}
              </Button>
            </Grid>
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
                      tipoFuncionario: "Outro",
                      fkCorregedoriaCNPJ: ""
                    });
                    onSubmit(null); // ou chame uma função de cancelamento, se preferir
                  }}
                >
                  Cancelar edição
                </Button>
              </Grid>
            )}
        </Grid>
      </form>
    </Paper>
  );
}
