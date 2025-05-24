import FuncionarioItem from "./FuncionarioItem";
import { Typography } from "@mui/material";

export default function FuncionarioList({ funcionarios, onEdit, onDelete }) {
  if (funcionarios.length === 0) {
    return <Typography>Nenhum funcionário encontrado.</Typography>;
  }

  return (
    <div>
      {funcionarios.map((f) => (
        <FuncionarioItem
          key={f.matricula}
          funcionario={f}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
