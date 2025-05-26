import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import { getPessoas } from "../services/pessoaService";
import { getProcessos } from "../services/processoService";

const papeis = ["Investigado", "Indiciado", "Testemunha", "Vítima", "Detido"];

export default function EnvolvimentoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idEnvolvimento: "",
    papelNoProcesso: "Investigado",
    fkProcessoInvestigativoIdProcesso: "",
    fkPessoaIdEnvolvido: ""
  });

  const [pessoas, setPessoas] = useState([]);
  const [processos, setProcessos] = useState([]);

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  useEffect(() => {
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
        idEnvolvimento: "",
        papelNoProcesso: "Investigado",
        fkProcessoInvestigativoIdProcesso: "",
        fkPessoaIdEnvolvido: ""
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID do Envolvimento"
              name="idEnvolvimento"
              fullWidth
              required
              disabled={editing}
              value={formData.idEnvolvimento}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Papel no Processo"
              name="papelNoProcesso"
              fullWidth
              value={formData.papelNoProcesso}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {papeis.map(p => (
                <MenuItem key={p} value={p}>{p}</MenuItem>
              ))}
            </TextField>
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
              {processos.map(proc => (
                <MenuItem key={proc.idProcesso} value={proc.idProcesso}>{proc.idProcesso}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Pessoa Envolvida"
              name="fkPessoaIdEnvolvido"
              fullWidth
              value={formData.fkPessoaIdEnvolvido}
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