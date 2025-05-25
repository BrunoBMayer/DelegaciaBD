import { useEffect, useState } from "react";
import { getFuncionarios, createFuncionario, updateFuncionario, deleteFuncionario } from "../services/funcionarioService";
import FuncionarioForm from "../components/FuncionarioForm";
import FuncionarioList from "../components/FuncionarioList";
import { Container, Typography, TextField } from "@mui/material";

export default function FuncionariosPage() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [funcEdit, setFuncEdit] = useState(null);
  const [busca, setBusca] = useState("");


  const fetchFuncionarios = () => {
    getFuncionarios().then(res => setFuncionarios(res.data));
  };

  useEffect(() => {
    getFuncionarios().then(res => {
      console.log(res.data); // ⬅️ Veja aqui se tipoFuncionario aparece
      setFuncionarios(res.data);
    });
  }, []);


  const handleSubmit = (dados) => {
    if (!dados) {
      setFuncEdit(null); // ← ativado pelo botão "Cancelar edição"
      return;
    }
    if (funcEdit) {
      updateFuncionario(funcEdit.matricula, dados).then(() => {
        setFuncEdit(null);
        fetchFuncionarios();
      });
    } else {
      createFuncionario(dados).then(fetchFuncionarios);
    }
  };


  const handleDelete = (matricula) => {
    if (window.confirm("Confirmar exclusão?")) {
      deleteFuncionario(matricula).then(fetchFuncionarios);
    }
  };

  const funcionariosFiltrados = funcionarios.filter((f) =>
    f.nome?.toLowerCase().includes(busca.toLowerCase()) ||
    f.matricula?.toLowerCase().includes(busca.toLowerCase())
  );


  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>Gerenciar Funcionários</Typography>
      <FuncionarioForm onSubmit={handleSubmit} initialData={funcEdit} editing={!!funcEdit} />

      <TextField
        label="Buscar por nome ou matrícula"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <FuncionarioList
        funcionarios={funcionariosFiltrados}
        onEdit={setFuncEdit}
        onDelete={handleDelete}
      />

    </Container>
  );
}
