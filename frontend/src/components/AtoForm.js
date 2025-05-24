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
    id_ato_documento: "",
    tipo_ato_documento: "Outro Documento",
    data_criacao_ato: "",
    conteudo_resumido_ou_referencia_arquivo: "",
    fk_ProcessoInvestigativo_id_processo: "",
    fk_Funcionario_matricula_autor: "",
    fk_Pessoa_id_alvo_ato: ""
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
        id_ato_documento: "",
        tipo_ato_documento: "Outro Documento",
        data_criacao_ato: "",
        conteudo_resumido_ou_referencia_arquivo: "",
        fk_ProcessoInvestigativo_id_processo: "",
        fk_Funcionario_matricula_autor: "",
        fk_Pessoa_id_alvo_ato: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="id_ato_documento" value={formData.id_ato_documento} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Tipo do Ato" name="tipo_ato_documento" value={formData.tipo_ato_documento} onChange={handleChange}>
              {tipos.map((tipo) => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Data de Criação" name="data_criacao_ato" value={formData.data_criacao_ato} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Referência/Conteúdo" name="conteudo_resumido_ou_referencia_arquivo" value={formData.conteudo_resumido_ou_referencia_arquivo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID do Processo" name="fk_ProcessoInvestigativo_id_processo" value={formData.fk_ProcessoInvestigativo_id_processo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Autor" name="fk_Funcionario_matricula_autor" value={formData.fk_Funcionario_matricula_autor} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="ID da Pessoa Alvo" name="fk_Pessoa_id_alvo_ato" value={formData.fk_Pessoa_id_alvo_ato} onChange={handleChange} />
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
