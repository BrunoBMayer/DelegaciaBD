import { useEffect, useState } from "react";
import {
  getEnvolvimentos, createEnvolvimento, updateEnvolvimento, deleteEnvolvimento
} from "../services/envolvimentoService";
import EnvolvimentoForm from "../components/EnvolvimentoForm";
import EnvolvimentoList from "../components/EnvolvimentoList";
import { Container, Typography, TextField } from "@mui/material";

export default function EnvolvimentosPage() {
  const [envolvimentos, setEnvolvimentos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [busca, setBusca] = useState("");

  const fetch = () => {
    getEnvolvimentos().then(res => setEnvolvimentos(res.data));
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
      updateEnvolvimento(editando.id_envolvimento, dados).then(() => {
        setEditando(null);
        fetch();
      });
    } else {
      createEnvolvimento(dados).then(fetch);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Remover envolvimento?")) {
      deleteEnvolvimento(id).then(fetch);
    }
  };

  const envolvimentosFiltrados = envolvimentos.filter((e) =>
    e.papel_no_processo?.toLowerCase().includes(busca.toLowerCase()) ||
    e.fk_Pessoa_id_envolvido?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Envolvimentos</Typography>
      <EnvolvimentoForm onSubmit={handleSubmit} initialData={editando} editing={!!editando} />
      <TextField
        label="Buscar por papel ou pessoa"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <EnvolvimentoList envolvimentos={envolvimentosFiltrados} onEdit={setEditando} onDelete={handleDelete} />
    </Container>
  );
}
