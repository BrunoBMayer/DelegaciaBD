import { useEffect, useState } from "react";
import { TextField, Button, Grid, Paper, MenuItem } from "@mui/material";
import { getFuncionarios } from "../services/funcionarioService";
import { getDenuncias } from "../services/denunciaService";
import axios from "axios";

const tipos = ["Sindicância", "PAD", "Inquérito Policial", "Verificação Preliminar"];
const status = ["Em Andamento", "Concluído", "Arquivado", "Suspenso"];

async function gerarIdUnico(prefixo, endpoint) {
  let id;
  let existe = true;

  while (existe) {
    const numero = Math.floor(1000 + Math.random() * 9000);
    id = `${prefixo}${numero}`;

    try {
      const res = await axios.get(`http://localhost:8080/${endpoint}`);
      existe = res.data.some(p => p.idProcesso === id);
    } catch (e) {
      console.error("Erro ao verificar ID único:", e);
      break;
    }
  }

  return id;
}

export default function ProcessoForm({ onSubmit, initialData, editing }) {
  const [formData, setFormData] = useState({
    idProcesso: "",
    numeroProtocoloInterno: "",
    tipoProcesso: "Sindicância",
    dataAbertura: "",
    dataConclusao: "",
    statusProcesso: "Em Andamento",
    descricaoResumidaObjeto: "",
    fkFuncionarioMatriculaResponsavelPrincipal: "",
    fkDenunciaIdOrigem: ""
  });

  const [funcionarios, setFuncionarios] = useState([]);
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      gerarIdUnico("PI", "processos").then(idGerado => {
        setFormData(prev => ({ ...prev, idProcesso: idGerado }));
      });
    }
  }, [initialData, editing]);

  useEffect(() => {
    getFuncionarios().then(res => setFuncionarios(res.data));
    getDenuncias().then(res => setDenuncias(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      gerarIdUnico("PI", "processos").then(idGerado => {
        setFormData({
          idProcesso: idGerado,
          numeroProtocoloInterno: "",
          tipoProcesso: "Sindicância",
          dataAbertura: "",
          dataConclusao: "",
          statusProcesso: "Em Andamento",
          descricaoResumidaObjeto: "",
          fkFuncionarioMatriculaResponsavelPrincipal: "",
          fkDenunciaIdOrigem: ""
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
              label="ID do Processo"
              name="idProcesso"
              fullWidth
              required
              disabled
              value={formData.idProcesso}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Número do Protocolo Interno"
              name="numeroProtocoloInterno"
              fullWidth
              value={formData.numeroProtocoloInterno}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Tipo de Processo"
              name="tipoProcesso"
              fullWidth
              value={formData.tipoProcesso}
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
              label="Data de Abertura"
              type="date"
              name="dataAbertura"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.dataAbertura}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Data de Conclusão"
              type="date"
              name="dataConclusao"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.dataConclusao}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Status do Processo"
              name="statusProcesso"
              fullWidth
              value={formData.statusProcesso}
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
              label="Descrição Resumida do Objeto"
              name="descricaoResumidaObjeto"
              multiline
              minRows={3}
              fullWidth
              value={formData.descricaoResumidaObjeto}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Funcionário Responsável Principal"
              name="fkFuncionarioMatriculaResponsavelPrincipal"
              fullWidth
              value={formData.fkFuncionarioMatriculaResponsavelPrincipal}
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
              label="Denúncia de Origem"
              name="fkDenunciaIdOrigem"
              fullWidth
              value={formData.fkDenunciaIdOrigem}
              onChange={handleChange}
              sx={{ width: '100%', minWidth: 300 }}
            >
              {denuncias.map(d => (
                <MenuItem key={d.idDenuncia} value={d.idDenuncia}>{d.idDenuncia}</MenuItem>
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