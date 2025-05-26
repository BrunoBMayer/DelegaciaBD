import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import { getFuncionarios } from "../services/funcionarioService";
import { getProcessos } from "../services/processoService";
import axios from "axios";

const status = ["Pendente", "Em Andamento", "Concluída"];

async function gerarIdUnico(prefixo, endpoint, campo = "idAtribuicao") {
  let id;
  let existe = true;

  while (existe) {
    const numero = Math.floor(1000 + Math.random() * 9000);
    id = `${prefixo}${numero}`;

    try {
      const res = await axios.get(`http://localhost:8080/${endpoint}`);
      existe = res.data.some(item => item[campo] === id);
    } catch (e) {
      console.error("Erro ao verificar ID único:", e);
      break;
    }
  }

  return id;
}

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

  const [funcionarios, setFuncionarios] = useState([]);
  const [processos, setProcessos] = useState([]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      gerarIdUnico("AT", "atribuicoes", "idAtribuicao").then(idGerado => {
        setFormData(prev => ({ ...prev, idAtribuicao: idGerado }));
      });
    }
  }, [initialData, editing]);

  useEffect(() => {
    getFuncionarios().then(res => setFuncionarios(res.data));
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
      gerarIdUnico("AT", "atribuicoes", "idAtribuicao").then(idGerado => {
        setFormData({
          idAtribuicao: idGerado,
          descricaoTarefa: "",
          dataAtribuicao: "",
          prazoConclusao: "",
          statusTarefa: "Pendente",
          fkProcessoInvestigativoIdProcesso: "",
          fkFuncionarioMatriculaDesignado: ""
        });
      });
    }
  };

  return (
    <Paper sx={{ padding: 2, marginBottom: 3 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID da Atribuição"
              name="idAtribuicao"
              fullWidth
              required
              disabled={editing}
              value={formData.idAtribuicao}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição da Tarefa"
              name="descricaoTarefa"
              multiline
              minRows={3}
              fullWidth
              value={formData.descricaoTarefa}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data de Atribuição"
              type="date"
              name="dataAtribuicao"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.dataAtribuicao}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Prazo para Conclusão"
              type="date"
              name="prazoConclusao"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.prazoConclusao}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Status da Tarefa"
              name="statusTarefa"
              fullWidth
              value={formData.statusTarefa}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {status.map(op => (
                <MenuItem key={op} value={op}>{op}</MenuItem>
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
              {processos.map(p => (
                <MenuItem key={p.idProcesso} value={p.idProcesso}>{p.idProcesso}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Funcionário Designado"
              name="fkFuncionarioMatriculaDesignado"
              fullWidth
              value={formData.fkFuncionarioMatriculaDesignado}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {funcionarios.map(f => (
                <MenuItem key={f.matricula} value={f.matricula}>{f.nome} ({f.matricula})</MenuItem>
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
