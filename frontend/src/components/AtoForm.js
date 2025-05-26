import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import { getFuncionarios } from "../services/funcionarioService";
import { getPessoas } from "../services/pessoaService";
import { getProcessos } from "../services/processoService";

const tipos = [
  "Relatório Parcial",
  "Relatório Final",
  "Auto de Prisão em Flagrante",
  "Mandado de Prisão",
  "Termo de Depoimento",
  "Coleta de Evidência",
  "Perícia",
  "Outro Documento"
];

export default function AtoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idAtoDocumento: "",
    tipoAtoDocumento: "Relatório Parcial",
    dataCriacaoAto: "",
    conteudoResumidoOuReferenciaArquivo: "",
    fkProcessoInvestigativoIdProcesso: "",
    fkFuncionarioMatriculaAutor: "",
    fkPessoaIdAlvoAto: ""
  });

  const [funcionarios, setFuncionarios] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [processos, setProcessos] = useState([]);

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
    getFuncionarios().then(res => setFuncionarios(res.data));
    getPessoas().then(res => setPessoas(res.data));
    getProcessos().then(res => setProcessos(res.data));
  }, []);

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
        tipoAtoDocumento: "Relatório Parcial",
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
            <TextField
              label="ID do Ato"
              name="idAtoDocumento"
              fullWidth
              required
              disabled={editing}
              value={formData.idAtoDocumento}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Tipo de Ato"
              name="tipoAtoDocumento"
              fullWidth
              value={formData.tipoAtoDocumento}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {tipos.map(op => (
                <MenuItem key={op} value={op}>{op}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data de Criação"
              type="date"
              name="dataCriacaoAto"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.dataCriacaoAto}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Conteúdo Resumido / Arquivo"
              name="conteudoResumidoOuReferenciaArquivo"
              multiline
              minRows={3}
              fullWidth
              value={formData.conteudoResumidoOuReferenciaArquivo}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Processo Investigativo"
              name="fkProcessoInvestigativoIdProcesso"
              fullWidth
              value={formData.fkProcessoInvestigativoIdProcesso}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {processos.map(p => (
                <MenuItem key={p.idProcesso} value={p.idProcesso}>{p.idProcesso}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Autor (Funcionário)"
              name="fkFuncionarioMatriculaAutor"
              fullWidth
              value={formData.fkFuncionarioMatriculaAutor}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome} ({f.matricula})</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Pessoa Alvo"
              name="fkPessoaIdAlvoAto"
              fullWidth
              value={formData.fkPessoaIdAlvoAto}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
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