import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem, FormControlLabel, Checkbox
} from "@mui/material";

const statusOptions = [
  "Recebida", "Em Análise", "Arquivada", "Procedente", "Improcedente"
];

export default function DenunciaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idDenuncia: "",
    dataOcorrencia: "",
    dataRegistroSistema: "",
    descricaoFato: "",
    statusDenuncia: "Recebida",
    denuncianteAnonimo: false,
    fkPessoaIdPessoa: "",
    fkFuncionarioMatriculaRegistrou: "",
    fkFuncionarioMatriculaAvaliador: ""
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      setFormData({
        idDenuncia: "",
        dataOcorrencia: "",
        dataRegistroSistema: "",
        descricaoFato: "",
        statusDenuncia: "Recebida",
        denuncianteAnonimo: false,
        fkPessoaIdPessoa: "",
        fkFuncionarioMatriculaRegistrou: "",
        fkFuncionarioMatriculaAvaliador: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="idDenuncia" value={formData.idDenuncia} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data Ocorrência" name="dataOcorrencia" value={formData.dataOcorrencia} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data Registro" name="dataRegistroSistema" value={formData.dataRegistroSistema} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline label="Descrição do Fato" name="descricaoFato" value={formData.descricaoFato} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Status" name="statusDenuncia" value={formData.statusDenuncia} onChange={handleChange}>
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={formData.denuncianteAnonimo} onChange={handleChange} name="denuncianteAnonimo" />}
              label="Denunciante anônimo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID da Pessoa (denunciante)" name="fkPessoaIdPessoa" value={formData.fkPessoaIdPessoa} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Funcionário (registrou)" name="fkFuncionarioMatriculaRegistrou" value={formData.fkFuncionarioMatriculaRegistrou} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Matrícula do Funcionário (avaliador)" name="fkFuncionarioMatriculaAvaliador" value={formData.fkFuncionarioMatriculaAvaliador} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>{editing ? "Salvar alterações" : "Cadastrar"}</Button>
          </Grid>
          {editing && (
            <Grid item xs={12}>
              <Button variant="outlined" color="secondary" fullWidth onClick={() => onSubmit(null)}>Cancelar edição</Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
}
