import PessoaItem from "./PessoaItem";
import { Typography } from "@mui/material";

export default function PessoaList({ pessoas, onEdit, onDelete }) {
  if (pessoas.length === 0) {
    return <Typography>Nenhuma pessoa encontrada.</Typography>;
  }

  return (
    <div>
      {pessoas.map((p) => (
        <PessoaItem key={p.idPessoa} pessoa={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}