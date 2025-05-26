import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import { getFuncionarios } from "../services/funcionarioService";
import { getPessoas } from "../services/pessoaService";

const statusOptions = ["Recebida", "Em Análise", "Arquivada", "Procedente", "Improcedente"];

export default function DenunciaForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idDenuncia: "",
    dataOcorrencia: "",
    dataRegistroSistema: "",
    descricaoFato: "",
    statusDenuncia: "Recebida",
    denuncianteAnonimo: false,
    fkFuncionarioMatriculaRegistrou: "",
    fkFuncionarioMatriculaAvaliador: "",
    fkPessoaIdPessoa: ""
  });

  const [funcionarios, setFuncionarios] = useState([]);
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
    getFuncionarios().then(res => setFuncionarios(res.data));
    getPessoas().then(res => setPessoas(res.data));
  }, []);

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
        fkFuncionarioMatriculaRegistrou: "",
        fkFuncionarioMatriculaAvaliador: "",
        fkPessoaIdPessoa: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID da Denúncia"
              name="idDenuncia"
              fullWidth
              required
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.idDenuncia}
              onChange={handleChange}
              disabled={editing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data da Ocorrência"
              type="date"
              name="dataOcorrencia"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              InputLabelProps={{ shrink: true }}
              value={formData.dataOcorrencia}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data de Registro"
              type="date"
              name="dataRegistroSistema"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              InputLabelProps={{ shrink: true }}
              value={formData.dataRegistroSistema}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição do Fato"
              name="descricaoFato"
              fullWidth
              multiline
              minRows={3}
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.descricaoFato}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Status"
              name="statusDenuncia"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.statusDenuncia}
              onChange={handleChange}
            >
              {statusOptions.map(op => (
                <MenuItem key={op} value={op}>{op}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Registrado por"
              name="fkFuncionarioMatriculaRegistrou"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.fkFuncionarioMatriculaRegistrou}
              onChange={handleChange}
            >
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome} ({f.matricula})</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Avaliador"
              name="fkFuncionarioMatriculaAvaliador"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.fkFuncionarioMatriculaAvaliador}
              onChange={handleChange}
            >
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome} ({f.matricula})</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Pessoa"
              name="fkPessoaIdPessoa"
              fullWidth
              size="medium"
              sx={{ width: '100%', minWidth: 300 }}
              value={formData.fkPessoaIdPessoa}
              onChange={handleChange}
            >
              {pessoas.map(p => (
                <MenuItem key={p.idPessoa} value={p.idPessoa}>{p.nome} ({p.idPessoa})</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth size="large">
              {editing ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}