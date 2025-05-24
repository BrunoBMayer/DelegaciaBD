import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = (nome, id) => {
    if (nome === "admin" && id === "admin") {
      setUsuario({ tipo: "admin", nome, id });
    } else if (id.length === 3) {
      // Simples: se tiver 3 dígitos, é matrícula de funcionário
      setUsuario({ tipo: "funcionario", nome, id });
    } else {
      // Senão, assume pessoa
      setUsuario({ tipo: "pessoa", nome, id });
    }
  };

  const logout = () => setUsuario(null);

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);