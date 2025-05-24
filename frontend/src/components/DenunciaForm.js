import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem, FormControlLabel, Checkbox
} from "@mui/material";

const statusOptions = [
  "Recebida", "Em Análise", "Arquivada", "Procedente", "Improcedente"
];

export default function DenunciaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    id_denuncia: "",
    data_ocorrencia: "",
    data_registro_sistema: "",
    descricao_fato: "",
    status_denuncia: "Recebida",
    denunciante_anonimo: false,
    fk_Pessoa_id_pessoa: "",
    fk_Funcionario_matricula_registrou: "",
    fk_Funcionario_matricula_avaliador: ""
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
        id_denuncia: "",
        data_ocorrencia: "",
        data_registro_sistema: "",
        descricao_fato: "",
        status_denuncia: "Recebida",
        denunciante_anonimo: false,
        fk_Pessoa_id_pessoa: "",
        fk_Funcionario_matricula_registrou: "",
        fk_Funcionario_matricula_avaliador: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="id_denuncia" value={formData.id_denuncia} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data Ocorrência" name="data_ocorrencia" value={formData.data_ocorrencia} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data Registro" name="data_registro_sistema" value={formData.data_registro_sistema} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline label="Descrição do Fato" name="descricao_fato" value={formData.descricao_fato} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Status" name="status_denuncia" value={formData.status_denuncia} onChange={handleChange}>
              {statusOptions.map((status) => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={formData.denunciante_anonimo} onChange={handleChange} name="denunciante_anonimo" />}
              label="Denunciante anônimo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID da Pessoa (denunciante)" name="fk_Pessoa_id_pessoa" value={formData.fk_Pessoa_id_pessoa} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Funcionário (registrou)" name="fk_Funcionario_matricula_registrou" value={formData.fk_Funcionario_matricula_registrou} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Matrícula do Funcionário (avaliador)" name="fk_Funcionario_matricula_avaliador" value={formData.fk_Funcionario_matricula_avaliador} onChange={handleChange} />
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
