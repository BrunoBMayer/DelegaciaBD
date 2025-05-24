import { useEffect, useState } from "react";
import { getPessoas, createPessoa, updatePessoa, deletePessoa } from "../services/pessoaService";
import PessoaForm from "../components/PessoaForm";
import PessoaList from "../components/PessoaList";
import { Container, Typography, TextField } from "@mui/material";

export default function PessoasPage() {
  const [pessoas, setPessoas] = useState([]);
  const [pessoaEdit, setPessoaEdit] = useState(null);
  const [busca, setBusca] = useState("");

  const fetchPessoas = () => {
    getPessoas().then(res => setPessoas(res.data));
  };

  useEffect(() => {
    fetchPessoas();
  }, []);

  const handleSubmit = (dados) => {
    if (!dados) {
      setPessoaEdit(null);
      return;
    }
    if (pessoaEdit) {
      updatePessoa(pessoaEdit.id_pessoa, dados).then(() => {
        setPessoaEdit(null);
        fetchPessoas();
      });
    } else {
      createPessoa(dados).then(fetchPessoas);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Deseja remover esta pessoa?")) {
      deletePessoa(id).then(fetchPessoas);
    }
  };

  const pessoasFiltradas = pessoas.filter((p) =>
    p.nome?.toLowerCase().includes(busca.toLowerCase()) ||
    p.CPF?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Pessoas</Typography>
      <PessoaForm onSubmit={handleSubmit} initialData={pessoaEdit} editing={!!pessoaEdit} />
      <TextField
        label="Buscar por nome ou CPF"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <PessoaList pessoas={pessoasFiltradas} onEdit={setPessoaEdit} onDelete={handleDelete} />
    </Container>
  );
}
