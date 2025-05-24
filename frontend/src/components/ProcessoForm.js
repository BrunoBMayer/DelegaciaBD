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
    id_processo: "",
    numero_protocolo_interno: "",
    tipo_processo: "Sindicância",
    data_abertura: "",
    data_conclusao: "",
    status_processo: "Em Andamento",
    descricao_resumida_objeto: "",
    fk_Funcionario_matricula_responsavel_principal: "",
    fk_Denuncia_id_origem: ""
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
        id_processo: "",
        numero_protocolo_interno: "",
        tipo_processo: "Sindicância",
        data_abertura: "",
        data_conclusao: "",
        status_processo: "Em Andamento",
        descricao_resumida_objeto: "",
        fk_Funcionario_matricula_responsavel_principal: "",
        fk_Denuncia_id_origem: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="ID do Processo" name="id_processo" value={formData.id_processo} onChange={handleChange} required disabled={editing} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Número Protocolo Interno" name="numero_protocolo_interno" value={formData.numero_protocolo_interno} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Tipo de Processo" name="tipo_processo" value={formData.tipo_processo} onChange={handleChange}>
              {tipoOptions.map(tipo => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select fullWidth label="Status" name="status_processo" value={formData.status_processo} onChange={handleChange}>
              {statusOptions.map(status => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data de Abertura" name="data_abertura" value={formData.data_abertura} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type="date" fullWidth label="Data de Conclusão" name="data_conclusao" value={formData.data_conclusao} onChange={handleChange} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Descrição Resumida" name="descricao_resumida_objeto" value={formData.descricao_resumida_objeto} onChange={handleChange} multiline />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Matrícula do Responsável" name="fk_Funcionario_matricula_responsavel_principal" value={formData.fk_Funcionario_matricula_responsavel_principal} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="ID da Denúncia de Origem" name="fk_Denuncia_id_origem" value={formData.fk_Denuncia_id_origem} onChange={handleChange} />
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
