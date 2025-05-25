import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem
} from "@mui/material";

const tipos = [
  "Relatório Parcial", "Relatório Final", "Auto de Prisão em Flagrante",
  "Mandado de Prisão", "Termo de Depoimento", "Coleta de Evidência",
  "Perícia", "Outro Documento"
];

export default function AtoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idAtoDocumento: "",
    tipoAtoDocumento: "Outro Documento",
    dataCriacaoAto: "",
    conteudoResumidoOuReferenciaArquivo: "",
    fkProcessoInvestigativoIdProcesso: "",
    fkFuncionarioMatriculaAutor: "",
    fkPessoaIdAlvoAto: ""
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
        idAtoDocumento: "",
        tipoAtoDocumento: "Outro Documento",
        dataCriacaoAto: "",
        conteudoResumidoOuReferenciaArquivo: "",
        fkProcessoInvestigativoIdProcesso: "",
        fkFuncionarioMatriculaAutor: "",
        fkPessoaIdAlvoAto: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="idAtoDocumento" value={formData.idAtoDocumento} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Tipo do Ato" name="tipoAtoDocumento" value={formData.tipoAtoDocumento} onChange={handleChange}>
              {tipos.map((tipo) => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Data de Criação" name="dataCriacaoAto" value={formData.dataCriacaoAto} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Referência/Conteúdo" name="conteudoResumidoOuReferenciaArquivo" value={formData.conteudoResumidoOuReferenciaArquivo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID do Processo" name="fkProcessoInvestigativoIdProcesso" value={formData.fkProcessoInvestigativoIdProcesso} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Autor" name="fkFuncionarioMatriculaAutor" value={formData.fkFuncionarioMatriculaAutor} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="ID da Pessoa Alvo" name="fkPessoaIdAlvoAto" value={formData.fkPessoaIdAlvoAto} onChange={handleChange} />
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
