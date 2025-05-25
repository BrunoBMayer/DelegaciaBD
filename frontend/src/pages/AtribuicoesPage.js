import { useEffect, useState } from "react";
import {
  getAtribuicoes, createAtribuicao, updateAtribuicao, deleteAtribuicao
} from "../services/atribuicaoService";
import AtribuicaoForm from "../components/AtribuicaoForm";
import AtribuicaoList from "../components/AtribuicaoList";
import { Container, Typography, TextField } from "@mui/material";

export default function AtribuicoesPage() {
  const [atribuicoes, setAtribuicoes] = useState([]);
  const [editando, setEditando] = useState(null);
  const [busca, setBusca] = useState("");

  const fetch = () => {
    getAtribuicoes().then(res => setAtribuicoes(res.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleSubmit = (dados) => {
    if (!dados) {
      setEditando(null);
      return;
    }
    if (editando) {
      updateAtribuicao(editando.idAtribuicao, dados).then(() => {
        setEditando(null);
        fetch();
      });
    } else {
      createAtribuicao(dados).then(fetch);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Remover atribuição?")) {
      deleteAtribuicao(id).then(fetch);
    }
  };

  const atribuicoesFiltradas = atribuicoes.filter((a) =>
    a.descricaoTarefa?.toLowerCase().includes(busca.toLowerCase()) ||
    a.statusTarefa?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Atribuições</Typography>
      <AtribuicaoForm onSubmit={handleSubmit} initialData={editando} editing={!!editando} />
      <TextField
        label="Buscar por descrição ou status"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <AtribuicaoList atribuicoes={atribuicoesFiltradas} onEdit={setEditando} onDelete={handleDelete} />
    </Container>
  );
}
