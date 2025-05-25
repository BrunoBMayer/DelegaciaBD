import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem
} from "@mui/material";

const tipoOptions = [
  "Sindicância", "PAD", "Inquérito Policial", "Verificação Preliminar"
];

const statusOptions = [
  "Em Andamento", "Concluído", "Arquivado", "Suspenso"
];

export default function ProcessoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idProcesso: "",
    numeroProtocoloInterno: "",
    tipoProcesso: "Sindicância",
    dataAbertura: "",
    dataConclusao: "",
    statusProcesso: "Em Andamento",
    descricaoResumidaObjeto: "",
    fkFuncionarioMatriculaResponsavelPrincipal: "",
    fkDenunciaIdOrigem: ""
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
        idProcesso: "",
        numeroProtocoloInterno: "",
        tipoProcesso: "Sindicância",
        dataAbertura: "",
        dataConclusao: "",
        statusProcesso: "Em Andamento",
        descricaoResumidaObjeto: "",
        fkFuncionarioMatriculaResponsavelPrincipal: "",
        fkDenunciaIdOrigem: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID do Processo" name="idProcesso" value={formData.idProcesso} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Número Protocolo Interno" name="numeroProtocoloInterno" value={formData.numeroProtocoloInterno} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Tipo de Processo" name="tipoProcesso" value={formData.tipoProcesso} onChange={handleChange}>
              {tipoOptions.map(tipo => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Status" name="statusProcesso" value={formData.statusProcesso} onChange={handleChange}>
              {statusOptions.map(status => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data de Abertura" name="dataAbertura" value={formData.dataAbertura} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data de Conclusão" name="dataConclusao" value={formData.dataConclusao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Descrição Resumida" name="descricaoResumidaObjeto" value={formData.descricaoResumidaObjeto} onChange={handleChange} multiline />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Responsável" name="fkFuncionarioMatriculaResponsavelPrincipal" value={formData.fkFuncionarioMatriculaResponsavelPrincipal} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID da Denúncia de Origem" name="fkDenunciaIdOrigem" value={formData.fkDenunciaIdOrigem} onChange={handleChange} />
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
