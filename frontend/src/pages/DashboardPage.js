import { useEffect, useState } from "react";
import {
  getFuncionarios, getPessoas, getDenuncias, getProcessos,
  getAtribuicoes, getAtos, getEnvolvimentos
} from "../services/dashboardService";
import {
  Typography, Grid, Paper, TextField, MenuItem, Box
} from "@mui/material";
import {
  BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, ResponsiveContainer
} from "recharts";

const cores = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#d0ed57"];

function agrupar(array, campo) {
  const contagem = {};
  array.forEach(item => {
    const chave = item[campo] || "Não informado";
    contagem[chave] = (contagem[chave] || 0) + 1;
  });
  return Object.entries(contagem).map(([nome, valor]) => ({ nome, valor }));
}

export default function DashboardPage() {
  const [originais, setOriginais] = useState({});
  const [filtros, setFiltros] = useState({
    statusDenuncia: "Todos",
    tipoProcesso: "Todos",
    statusTarefa: "Todos",
  });

  useEffect(() => {
    Promise.all([
      getFuncionarios(), getPessoas(), getDenuncias(), getProcessos(),
      getAtribuicoes(), getAtos(), getEnvolvimentos()
    ]).then(([funcs, pess, den, proc, atrib, atos, envol]) => {
      setOriginais({
        funcionarios: funcs.data,
        pessoas: pess.data,
        denuncias: den.data,
        processos: proc.data,
        atribuicoes: atrib.data,
        atos: atos.data,
        envolvimentos: envol.data
      });
    });
  }, []);

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const dadosFiltrados = {
    funcionarios: originais.funcionarios || [],
    pessoas: originais.pessoas || [],
    denuncias: (originais.denuncias || []).filter(d =>
      filtros.statusDenuncia === "Todos" || d.statusDenuncia === filtros.statusDenuncia
    ),
    processos: (originais.processos || []).filter(p =>
      filtros.tipoProcesso === "Todos" || p.tipoProcesso === filtros.tipoProcesso
    ),
    atribuicoes: (originais.atribuicoes || []).filter(t =>
      filtros.statusTarefa === "Todos" || t.statusTarefa === filtros.statusTarefa
    ),
    atos: originais.atos || [],
    envolvimentos: originais.envolvimentos || [],
  };

  const opcoesDenuncia = ["Todos", "Recebida", "Em Análise", "Arquivada", "Procedente", "Improcedente"];
  const opcoesProcesso = ["Todos", "Sindicância", "PAD", "Inquérito Policial", "Verificação Preliminar"];
  const opcoesTarefa = ["Todos", "Pendente", "Em Andamento", "Concluída"];

  const renderGrafico = (tipo, dados, corIndex = 0) => {
    if (tipo === "bar") {
      return (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dados} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="nome" type="category" />
            <Tooltip />
            <Bar dataKey="valor" fill={cores[corIndex % cores.length]} />
          </BarChart>
        </ResponsiveContainer>
      );
    }
    if (tipo === "pie") {
      return (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={dados} dataKey="valor" nameKey="nome" outerRadius={100} label>
              {dados.map((_, i) => (
                <Cell key={i} fill={cores[i % cores.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
    }
    return null;
  };

  const renderSecao = (titulo, tipo, dados, filtroJSX = null, corIndex = 0) => (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>{titulo}</Typography>
          {renderGrafico(tipo, dados, corIndex)}
        </Grid>
        {filtroJSX && (
          <Grid item xs={12} md={4}>
            {filtroJSX}
          </Grid>
        )}
      </Grid>
    </Paper>
  );

  return (
    <Box sx={{ mt: 3 }}>
      {renderSecao(
        "Funcionários por Cargo",
        "bar",
        agrupar(dadosFiltrados.funcionarios, "tipoFuncionario"),
        null,
        0
      )}

      {renderSecao(
        "Denúncias por Status",
        "pie",
        agrupar(dadosFiltrados.denuncias, "statusDenuncia"),
        <TextField
          select
          fullWidth
          label="Status da Denúncia"
          name="statusDenuncia"
          value={filtros.statusDenuncia}
          onChange={handleFiltro}
        >
          {opcoesDenuncia.map(op => <MenuItem key={op} value={op}>{op}</MenuItem>)}
        </TextField>,
        1
      )}

      {renderSecao(
        "Processos por Tipo",
        "bar",
        agrupar(dadosFiltrados.processos, "tipoProcesso"),
        <TextField
          select
          fullWidth
          label="Tipo de Processo"
          name="tipoProcesso"
          value={filtros.tipoProcesso}
          onChange={handleFiltro}
        >
          {opcoesProcesso.map(op => <MenuItem key={op} value={op}>{op}</MenuItem>)}
        </TextField>,
        2
      )}

      {renderSecao(
        "Tarefas por Status",
        "bar",
        agrupar(dadosFiltrados.atribuicoes, "statusTarefa"),
        <TextField
          select
          fullWidth
          label="Status da Tarefa"
          name="statusTarefa"
          value={filtros.statusTarefa}
          onChange={handleFiltro}
        >
          {opcoesTarefa.map(op => <MenuItem key={op} value={op}>{op}</MenuItem>)}
        </TextField>,
        3
      )}

      {renderSecao(
        "Atos por Tipo",
        "pie",
        agrupar(dadosFiltrados.atos, "tipoAtoDocumento"),
        null,
        4
      )}

      {renderSecao(
        "Envolvimentos por Papel",
        "bar",
        agrupar(dadosFiltrados.envolvimentos, "papelNoProcesso"),
        null,
        5
      )}

      <Paper sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">Total de Pessoas Cadastradas</Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>{dadosFiltrados.pessoas.length}</Typography>
      </Paper>
    </Box>
  );
}