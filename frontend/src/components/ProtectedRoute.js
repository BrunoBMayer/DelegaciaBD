import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children, tipo }) {
  const { usuario } = useUser();

  if (!usuario) {
    // Se não estiver logado, redireciona para login
    return <Navigate to="/" />;
  }

  if (tipo && usuario.tipo !== tipo) {
    // Se a rota exige um tipo específico e o usuário não é, vai para home
    return <Navigate to="/home" />;
  }

  return children;
}