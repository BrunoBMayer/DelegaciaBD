import { useEffect, useState } from "react";
import { Grid, TextField, Button, Paper, MenuItem } from "@mui/material";

const papeis = ["Investigado", "Indiciado", "Testemunha", "Vítima", "Detido"];

export default function EnvolvimentoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    id_envolvimento: "",
    papel_no_processo: "Testemunha",
    fk_ProcessoInvestigativo_id_processo: "",
    fk_Pessoa_id_envolvido: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      setFormData({
        id_envolvimento: "",
        papel_no_processo: "Testemunha",
        fk_ProcessoInvestigativo_id_processo: "",
        fk_Pessoa_id_envolvido: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="id_envolvimento" value={formData.id_envolvimento} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Papel no Processo" name="papel_no_processo" value={formData.papel_no_processo} onChange={handleChange}>
              {papeis.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="ID do Processo" name="fk_ProcessoInvestigativo_id_processo" value={formData.fk_ProcessoInvestigativo_id_processo} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="ID da Pessoa" name="fk_Pessoa_id_envolvido" value={formData.fk_Pessoa_id_envolvido} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>{editing ? "Salvar alterações" : "Cadastrar"}</Button>
          </Grid>
          {editing && (
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => onSubmit(null)}>Cancelar edição</Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
}
