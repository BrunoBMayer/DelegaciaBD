import { useEffect, useState } from "react";
import {
  getCorregedorias, createCorregedoria, updateCorregedoria, deleteCorregedoria
} from "../services/corregedoriaService";
import CorregedoriaForm from "../components/CorregedoriaForm";
import CorregedoriaList from "../components/CorregedoriaList";
import { Container, Typography, TextField } from "@mui/material";

export default function CorregedoriasPage() {
  const [corregedorias, setCorregedorias] = useState([]);
  const [editando, setEditando] = useState(null);
  const [busca, setBusca] = useState("");

  const fetch = () => {
    getCorregedorias().then(res => setCorregedorias(res.data));
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
      updateCorregedoria(editando.cnpj, dados).then(() => {
        setEditando(null);
        fetch();
      });
    } else {
      createCorregedoria(dados).then(fetch);
    }
  };

  const handleDelete = (cnpj) => {
    if (window.confirm("Deseja remover esta corregedoria?")) {
      deleteCorregedoria(cnpj).then(fetch);
    }
  };

  const filtrados = corregedorias.filter((c) =>
    c.nome?.toLowerCase().includes(busca.toLowerCase()) ||
    c.cnpj?.includes(busca)
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Corregedorias</Typography>
      <CorregedoriaForm onSubmit={handleSubmit} initialData={editando} editing={!!editando} />
      <TextField
        label="Buscar por nome ou CNPJ"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <CorregedoriaList corregedorias={filtrados} onEdit={setEditando} onDelete={handleDelete} />
    </Container>
  );
}
