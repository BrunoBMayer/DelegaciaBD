import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Typography, Box } from "@mui/material";
import { UserProvider, useUser } from "./context/UserContext";
import FuncionariosPage from "./pages/FuncionariosPage";
import PessoasPage from "./pages/PessoasPage";
import DenunciasPage from "./pages/DenunciasPage";
import ProcessosPage from "./pages/ProcessosPage";
import AtribuicoesPage from "./pages/AtribuicoesPage";
import AtosPage from "./pages/AtosPage";
import EnvolvimentosPage from "./pages/EnvolvimentosPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function AppBarNav() {
  const { usuario, logout } = useUser();

  return (
    <AppBar position="static">
      <Toolbar>
        {usuario && (
          <>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            {usuario.tipo === "admin" && (
              <>
                <Button color="inherit" component={Link} to="/funcionarios">Funcionários</Button>
                <Button color="inherit" component={Link} to="/pessoas">Pessoas</Button>
                <Button color="inherit" component={Link} to="/denuncias">Denúncias</Button>
                <Button color="inherit" component={Link} to="/processos">Processos</Button>
                <Button color="inherit" component={Link} to="/atribuicoes">Atribuições</Button>
                <Button color="inherit" component={Link} to="/atos">Atos</Button>
                <Button color="inherit" component={Link} to="/envolvimentos">Envolvimentos</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
              </>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ mr: 2 }}>{usuario.nome} ({usuario.tipo})</Typography>
            <Button color="inherit" onClick={logout}>Sair</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function AppRoutes() {
  const { usuario } = useUser();

  return (
    <>
      <AppBarNav />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

          <Route path="/funcionarios" element={
            <ProtectedRoute tipo="admin"><FuncionariosPage /></ProtectedRoute>
          } />
          <Route path="/pessoas" element={
            <ProtectedRoute tipo="admin"><PessoasPage /></ProtectedRoute>
          } />
          <Route path="/denuncias" element={
            <ProtectedRoute tipo="admin"><DenunciasPage /></ProtectedRoute>
          } />
          <Route path="/processos" element={
            <ProtectedRoute tipo="admin"><ProcessosPage /></ProtectedRoute>
          } />
          <Route path="/atribuicoes" element={
            <ProtectedRoute tipo="admin"><AtribuicoesPage /></ProtectedRoute>
          } />
          <Route path="/atos" element={
            <ProtectedRoute tipo="admin"><AtosPage /></ProtectedRoute>
          } />
          <Route path="/envolvimentos" element={
            <ProtectedRoute tipo="admin"><EnvolvimentosPage /></ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute tipo="admin"><DashboardPage /></ProtectedRoute>
          } />
        </Routes>
      </Container>
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;