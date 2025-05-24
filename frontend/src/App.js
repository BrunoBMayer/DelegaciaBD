// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import FuncionariosPage from "./pages/FuncionariosPage";
import PessoasPage from "./pages/PessoasPage";
import DenunciasPage from "./pages/DenunciasPage";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Início</Button>
          <Button color="inherit" component={Link} to="/funcionarios">Funcionários</Button>
          <Button color="inherit" component={Link} to="/pessoas">Pessoas</Button>
          <Button color="inherit" component={Link} to="/denuncias">Denúncias</Button>

          {/* Adicione mais botões aqui futuramente */}
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<div>Bem-vindo ao sistema da Corregedoria!</div>} />
          <Route path="/funcionarios" element={<FuncionariosPage />} />
          <Route path="/pessoas" element={<PessoasPage />} />
          <Route path="/denuncias" element={<DenunciasPage />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;