import { useEffect, useState } from "react";

function App() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    fetch("/funcionarios")
      .then(res => res.json())
      .then(data => setFuncionarios(data))
      .catch(err => console.error("Erro ao buscar funcionários:", err));
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <ul>
        {funcionarios.map((f) => (
          <li key={f.id}>{f.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
