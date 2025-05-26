import { createContext, useContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = async (nome, id) => {
    if (nome === "admin" && id === "admin") {
      setUsuario({ nome: "admin", tipo: "admin", id: "admin" });
      return "admin";
    }

    try {
      const resPessoa = await axios.get("http://localhost:8080/pessoas");
      const pessoa = resPessoa.data.find(
        p => p.nome.toLowerCase() === nome && p.idPessoa === id
      );

      if (pessoa) {
        setUsuario({ nome: pessoa.nome, tipo: "pessoa", id: pessoa.idPessoa });
        return "pessoa";
      }

      const resFunc = await axios.get("http://localhost:8080/funcionarios");
      const funcionario = resFunc.data.find(
        f => f.nome.toLowerCase() === nome && f.matricula === id
      );

      if (funcionario) {
        setUsuario({ nome: funcionario.nome, tipo: "funcionario", id: funcionario.matricula });
        return "funcionario";
      }

      alert("Nome ou ID incorretos.");
      return null;
    } catch (err) {
      console.error("Erro no login:", err);
      alert("Erro ao tentar fazer login.");
      return null;
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);