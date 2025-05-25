import { useEffect, useState } from "react";
import { getProcessos, createProcesso, updateProcesso, deleteProcesso } from "../services/processoService";
import ProcessoForm from "../components/ProcessoForm";
import ProcessoList from "../components/ProcessoList";
import { Container, Typography, TextField } from "@mui/material";

export default function ProcessosPage() {
  const [processos, setProcessos] = useState([]);
  const [procEdit, setProcEdit] = useState(null);
  const [busca, setBusca] = useState("");

  const fetchProcessos = () => {
    getProcessos().then(res => setProcessos(res.data));
  };

  useEffect(() => {
    fetchProcessos();
  }, []);

  const handleSubmit = (dados) => {
    if (!dados) {
      setProcEdit(null);
      return;
    }
    if (procEdit) {
      updateProcesso(procEdit.idProcesso, dados).then(() => {
        setProcEdit(null);
        fetchProcessos();
      });
    } else {
      createProcesso(dados).then(fetchProcessos);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Deseja remover este processo?")) {
      deleteProcesso(id).then(fetchProcessos);
    }
  };

  const processosFiltrados = processos.filter((p) =>
    p.tipoProcesso?.toLowerCase().includes(busca.toLowerCase()) ||
    p.statusProcesso?.toLowerCase().includes(busca.toLowerCase()) ||
    p.descricaoResumidaObjeto?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Processos</Typography>
      <ProcessoForm onSubmit={handleSubmit} initialData={procEdit} editing={!!procEdit} />
      <TextField
        label="Buscar por tipo, status ou descrição"
        fullWidth
        variant="outlined"
        value={busca}
        sx={{ marginBottom: 3 }}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ProcessoList processos={processosFiltrados} onEdit={setProcEdit} onDelete={handleDelete} />
    </Container>
  );
}
