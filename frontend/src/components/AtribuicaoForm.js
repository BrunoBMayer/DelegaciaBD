import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem
} from "@mui/material";

const statusOptions = ["Pendente", "Em Andamento", "Concluída"];

export default function AtribuicaoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    id_atribuicao: "",
    descricao_tarefa: "",
    data_atribuicao: "",
    prazo_conclusao: "",
    status_tarefa: "Pendente",
    fk_ProcessoInvestigativo_id_processo: "",
    fk_Funcionario_matricula_designado: ""
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
        id_atribuicao: "",
        descricao_tarefa: "",
        data_atribuicao: "",
        prazo_conclusao: "",
        status_tarefa: "Pendente",
        fk_ProcessoInvestigativo_id_processo: "",
        fk_Funcionario_matricula_designado: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="id_atribuicao" value={formData.id_atribuicao} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Descrição da Tarefa" name="descricao_tarefa" value={formData.descricao_tarefa} onChange={handleChange} multiline />
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Data de Atribuição" name="data_atribuicao" value={formData.data_atribuicao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Prazo Conclusão" name="prazo_conclusao" value={formData.prazo_conclusao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Status" name="status_tarefa" value={formData.status_tarefa} onChange={handleChange}>
              {statusOptions.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID do Processo" name="fk_ProcessoInvestigativo_id_processo" value={formData.fk_ProcessoInvestigativo_id_processo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Funcionário" name="fk_Funcionario_matricula_designado" value={formData.fk_Funcionario_matricula_designado} onChange={handleChange} />
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
