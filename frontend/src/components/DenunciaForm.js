import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import axios from "axios";
import { getFuncionarios } from "../services/funcionarioService";
import { getPessoas } from "../services/pessoaService";

const statusOpcoes = ["Recebida", "Em Análise", "Arquivada", "Procedente", "Improcedente"];

async function gerarIdUnico(prefixo, endpoint) {
  let id;
  let existe = true;

  while (existe) {
    const numero = Math.floor(1000 + Math.random() * 9000);
    id = `${prefixo}${numero}`;

    try {
      const res = await axios.get(`http://localhost:8080/${endpoint}`);
      existe = res.data.some(item => item.idDenuncia === id);
    } catch (e) {
      console.error("Erro ao verificar ID único:", e);
      break;
    }
  }

  return id;
}

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
    if (initialData) {
      setFormData(initialData);
    } else {
      gerarIdUnico("D", "denuncias").then(idGerado => {
        setFormData(prev => ({ ...prev, idDenuncia: idGerado }));
      });
    }
  }, [initialData, editing]);

  useEffect(() => {
    getFuncionarios().then(res => setFuncionarios(res.data));
    getPessoas().then(res => setPessoas(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      gerarIdUnico("D", "denuncias").then(idGerado => {
        setFormData({
          idDenuncia: idGerado,
          dataOcorrencia: "",
          dataRegistroSistema: "",
          descricaoFato: "",
          statusDenuncia: "Recebida",
          denuncianteAnonimo: false,
          fkFuncionarioMatriculaRegistrou: "",
          fkFuncionarioMatriculaAvaliador: "",
          fkPessoaIdPessoa: ""
        });
      });
    }
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="ID da Denúncia" name="idDenuncia" value={formData.idDenuncia} fullWidth disabled sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Data da Ocorrência" type="date" name="dataOcorrencia" value={formData.dataOcorrencia} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} required sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Data de Registro" type="date" name="dataRegistroSistema" value={formData.dataRegistroSistema} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} required sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Descrição do Fato" name="descricaoFato" value={formData.descricaoFato} onChange={handleChange} fullWidth multiline rows={3} required sx={{ minWidth: 300 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select label="Status" name="statusDenuncia" value={formData.statusDenuncia} onChange={handleChange} fullWidth sx={{ minWidth: 300 }}>
              {statusOpcoes.map(status => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Denunciante Anônimo" name="denuncianteAnonimo" select value={formData.denuncianteAnonimo} onChange={handleChange} fullWidth sx={{ minWidth: 300 }}>
              <MenuItem value={true}>Sim</MenuItem>
              <MenuItem value={false}>Não</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select name="fkFuncionarioMatriculaRegistrou" label="Registrado por" value={formData.fkFuncionarioMatriculaRegistrou} onChange={handleChange} fullWidth sx={{ minWidth: 300 }}>
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField select name="fkFuncionarioMatriculaAvaliador" label="Avaliado por" value={formData.fkFuncionarioMatriculaAvaliador} onChange={handleChange} fullWidth sx={{ minWidth: 300 }}>
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField select name="fkPessoaIdPessoa" label="Pessoa Denunciada" value={formData.fkPessoaIdPessoa} onChange={handleChange} fullWidth sx={{ minWidth: 300 }}>
              {pessoas.map(p => (
                <MenuItem key={p.idPessoa} value={p.idPessoa}>{p.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              {editing ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}