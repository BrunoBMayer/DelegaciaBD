import { useEffect, useState } from "react";
import {
  getAtos, createAto, updateAto, deleteAto
} from "../services/atoService";
import AtoForm from "../components/AtoForm";
import AtoList from "../components/AtoList";
import { Container, Typography, TextField } from "@mui/material";

export default function AtosPage() {
  const [atos, setAtos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [busca, setBusca] = useState("");

  const fetch = () => {
    getAtos().then(res => setAtos(res.data));
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
      updateAto(editando.id_ato_documento, dados).then(() => {
        setEditando(null);
        fetch();
      });
    } else {
      createAto(dados).then(fetch);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Remover ato?")) {
      deleteAto(id).then(fetch);
    }
  };

  const atosFiltrados = atos.filter((a) =>
    a.tipo_ato_documento?.toLowerCase().includes(busca.toLowerCase()) ||
    a.conteudo_resumido_ou_referencia_arquivo?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Atos Processuais</Typography>
      <AtoForm onSubmit={handleSubmit} initialData={editando} editing={!!editando} />
      <TextField
        label="Buscar por tipo ou conteúdo"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <AtoList atos={atosFiltrados} onEdit={setEditando} onDelete={handleDelete} />
    </Container>
  );
}
