import { useEffect, useState } from "react";
import { getDenuncias, createDenuncia, updateDenuncia, deleteDenuncia } from "../services/denunciaService";
import DenunciaForm from "../components/DenunciaForm";
import DenunciaList from "../components/DenunciaList";
import { Container, Typography, TextField } from "@mui/material";

export default function DenunciasPage() {
  const [denuncias, setDenuncias] = useState([]);
  const [denunciaEdit, setDenunciaEdit] = useState(null);
  const [busca, setBusca] = useState("");

  const fetchDenuncias = () => {
    getDenuncias().then(res => setDenuncias(res.data));
  };

  useEffect(() => {
    fetchDenuncias();
  }, []);

  const handleSubmit = (dados) => {
    if (!dados) {
      setDenunciaEdit(null);
      return;
    }
    if (denunciaEdit) {
      updateDenuncia(denunciaEdit.id_denuncia, dados).then(() => {
        setDenunciaEdit(null);
        fetchDenuncias();
      });
    } else {
      createDenuncia(dados).then(fetchDenuncias);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Remover denúncia?")) {
      deleteDenuncia(id).then(fetchDenuncias);
    }
  };

  const denunciasFiltradas = denuncias.filter((d) =>
    d.descricao_fato?.toLowerCase().includes(busca.toLowerCase()) ||
    d.status_denuncia?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Denúncias</Typography>
      <DenunciaForm onSubmit={handleSubmit} initialData={denunciaEdit} editing={!!denunciaEdit} />
      <TextField
        label="Buscar por descrição ou status"
        fullWidth
        variant="outlined"
        value={busca}
        sx={{ marginBottom: 3 }}
        onChange={(e) => setBusca(e.target.value)}
      />
      <DenunciaList denuncias={denunciasFiltradas} onEdit={setDenunciaEdit} onDelete={handleDelete} />
    </Container>
  );
}
