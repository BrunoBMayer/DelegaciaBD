import { useEffect, useState } from "react";
import {
  Grid, TextField, Button, Paper, MenuItem
} from "@mui/material";

const statusOptions = ["Pendente", "Em Andamento", "Concluída"];

export default function AtribuicaoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idAtribuicao: "",
    descricaoTarefa: "",
    dataAtribuicao: "",
    prazoConclusao: "",
    statusTarefa: "Pendente",
    fkProcessoInvestigativoIdProcesso: "",
    fkFuncionarioMatriculaDesignado: ""
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
        idAtribuicao: "",
        descricaoTarefa: "",
        dataAtribuicao: "",
        prazoConclusao: "",
        statusTarefa: "Pendente",
        fkProcessoInvestigativoIdProcesso: "",
        fkFuncionarioMatriculaDesignado: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID" name="idAtribuicao" value={formData.idAtribuicao} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Descrição da Tarefa" name="descricaoTarefa" value={formData.descricaoTarefa} onChange={handleChange} multiline />
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Data de Atribuição" name="dataAtribuicao" value={formData.dataAtribuicao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField type="date" fullWidth label="Prazo Conclusão" name="prazoConclusao" value={formData.prazoConclusao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Status" name="statusTarefa" value={formData.statusTarefa} onChange={handleChange}>
              {statusOptions.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID do Processo" name="fkProcessoInvestigativoIdProcesso" value={formData.fkProcessoInvestigativoIdProcesso} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Funcionário" name="fkFuncionarioMatriculaDesignado" value={formData.fkFuncionarioMatriculaDesignado} onChange={handleChange} />
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
