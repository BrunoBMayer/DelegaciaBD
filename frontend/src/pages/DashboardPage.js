import { useEffect, useState } from "react";
import {
  Container, Typography, MenuItem, Select, FormControl, InputLabel,
  Checkbox, FormControlLabel, Box, Grid
} from "@mui/material";
import axios from "axios";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

const cores = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#d0ed57"];

export default function DashboardPage() {
  // Estados para filtros
  const [statusDenuncia, setStatusDenuncia] = useState("Todos");
  const [anonimo, setAnonimo] = useState("Todos");
  const [dadosDenuncia, setDadosDenuncia] = useState([]);

  const [statusProcesso, setStatusProcesso] = useState("Todos");
  const [dadosProcesso, setDadosProcesso] = useState([]);

  // Fetch para denúncias
  const fetchDenuncias = async () => {
    try {
      const res = await axios.get("http://localhost:8080/denuncias");
      let lista = res.data;

      if (statusDenuncia !== "Todos") {
        lista = lista.filter(d => d.statusDenuncia === statusDenuncia);
      }

      if (anonimo !== "Todos") {
        const flag = anonimo === "Sim";
        lista = lista.filter(d => d.denuncianteAnonimo === flag);
      }

      const contagem = {};
      lista.forEach(d => {
        contagem[d.statusDenuncia] = (contagem[d.statusDenuncia] || 0) + 1;
      });

      const formatado = Object.entries(contagem).map(([status, value]) => ({
        name: status,
        value
      }));

      setDadosDenuncia(formatado);
    } catch (e) {
      console.error("Erro ao buscar denúncias:", e);
    }
  };

  // Fetch para processos
  const fetchProcessos = async () => {
    try {
      const res = await axios.get("http://localhost:8080/processos");
      let lista = res.data;

      if (statusProcesso !== "Todos") {
        lista = lista.filter(p => p.statusProcesso === statusProcesso);
      }

      const contagem = {};
      lista.forEach(p => {
        contagem[p.tipoProcesso] = (contagem[p.tipoProcesso] || 0) + 1;
      });

      const formatado = Object.entries(contagem).map(([tipo, total]) => ({
        tipo,
        total
      }));

      setDadosProcesso(formatado);
    } catch (e) {
      console.error("Erro ao buscar processos:", e);
    }
  };

  useEffect(() => {
    fetchDenuncias();
  }, [statusDenuncia, anonimo]);

  useEffect(() => {
    fetchProcessos();
  }, [statusProcesso]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard Interativa</Typography>

      <Grid container spacing={4}>

        {/* GRÁFICO DE DENÚNCIAS */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Denúncias por Status</Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusDenuncia} label="Status" onChange={e => setStatusDenuncia(e.target.value)}>
              <MenuItem value="Todos">Todos</MenuItem>
              <MenuItem value="Recebida">Recebida</MenuItem>
              <MenuItem value="Em Análise">Em Análise</MenuItem>
              <MenuItem value="Arquivada">Arquivada</MenuItem>
              <MenuItem value="Procedente">Procedente</MenuItem>
              <MenuItem value="Improcedente">Improcedente</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Select value={anonimo} onChange={e => setAnonimo(e.target.value)}>
                <MenuItem value="Todos">Todos</MenuItem>
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Não">Não</MenuItem>
              </Select>
            }
            label="Denunciante anônimo"
            sx={{ mb: 2, display: "block" }}
          />

          <Box display="flex" justifyContent="center">
            <PieChart width={400} height={300}>
              <Pie
                data={dadosDenuncia}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {dadosDenuncia.map((_, i) => (
                  <Cell key={i} fill={cores[i % cores.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Box>
        </Grid>

        {/* GRÁFICO DE PROCESSOS */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Processos por Tipo</Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select value={statusProcesso} label="Status" onChange={e => setStatusProcesso(e.target.value)}>
              <MenuItem value="Todos">Todos</MenuItem>
              <MenuItem value="Em Andamento">Em Andamento</MenuItem>
              <MenuItem value="Concluído">Concluído</MenuItem>
              <MenuItem value="Arquivado">Arquivado</MenuItem>
              <MenuItem value="Suspenso">Suspenso</MenuItem>
            </Select>
          </FormControl>

          <Box display="flex" justifyContent="center">
            <BarChart width={400} height={300} data={dadosProcesso}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tipo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
