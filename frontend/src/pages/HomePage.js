import { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText, Paper } from "@mui/material";
import axios from "axios";
import { useUser } from "../context/UserContext";

export default function HomePage() {
  const { usuario } = useUser();
  const [dados, setDados] = useState([]);

  useEffect(() => {
    if (!usuario) return;

    const buscarDados = async () => {
      try {
        if (usuario.tipo === "funcionario") {
          const res = await axios.get("http://localhost:8080/processos");
          const relacionados = res.data.filter(p =>
            p.fkFuncionarioMatriculaResponsavelPrincipal === usuario.id
          );
          setDados(relacionados);
        } else if (usuario.tipo === "pessoa") {
          const res = await axios.get("http://localhost:8080/denuncias");
          const relacionados = res.data.filter(d =>
            d.fkPessoaIdPessoa === usuario.id
          );
          setDados(relacionados);
        }
      } catch (e) {
        console.error("Erro ao buscar dados da home:", e);
      }
    };

    buscarDados();
  }, [usuario]);

  if (!usuario) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo, {usuario.nome}
      </Typography>

      {usuario.tipo === "admin" && (
        <Typography variant="body1">
          Você está logado como administrador. Use a barra superior para acessar as seções do sistema.
        </Typography>
      )}

      {usuario.tipo === "funcionario" && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Seus Processos Responsáveis</Typography>
          <List>
            {dados.map((p) => (
              <ListItem key={p.idProcesso}>
                <ListItemText
                  primary={`Processo ${p.idProcesso}`}
                  secondary={`Status: ${p.statusProcesso}`}
                />
              </ListItem>
            ))}
            {dados.length === 0 && <Typography>Nenhum processo atribuído.</Typography>}
          </List>
        </Paper>
      )}

      {usuario.tipo === "pessoa" && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Suas Denúncias</Typography>
          <List>
            {dados.map((d) => (
              <ListItem key={d.idDenuncia}>
                <ListItemText
                  primary={`Denúncia ${d.idDenuncia}`}
                  secondary={`Status: ${d.statusDenuncia}`}
                />
              </ListItem>
            ))}
            {dados.length === 0 && <Typography>Nenhuma denúncia registrada.</Typography>}
          </List>
        </Paper>
      )}
    </Box>
  );
}