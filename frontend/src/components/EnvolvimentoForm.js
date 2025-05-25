import { useEffect, useState } from "react";
import { Grid, TextField, Button, Paper, MenuItem } from "@mui/material";

const papeis = ["Investigado", "Indiciado", "Testemunha", "Vítima", "Detido"];

export default function EnvolvimentoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idEnvolvimento: "",
    papelNoProcesso: "Testemunha",
    fkProcessoInvestigativoIdProcesso: "",
    fkPessoaIdEnvolvido: ""
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
        idEnvolvimento: "",
        papelNoProcesso: "Testemunha",
        fkProcessoInvestigativoIdProcesso: "",
        fkPessoaIdEnvolvido: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="idEnvolvimento" value={formData.idEnvolvimento} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Papel no Processo" name="papelNoProcesso" value={formData.papelNoProcesso} onChange={handleChange}>
              {papeis.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="ID do Processo" name="fkProcessoInvestigativoIdProcesso" value={formData.fkProcessoInvestigativoIdProcesso} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="ID da Pessoa" name="fkPessoaIdEnvolvido" value={formData.fkPessoaIdEnvolvido} onChange={handleChange} />
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
