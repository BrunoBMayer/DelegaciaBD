import EnvolvimentoItem from "./EnvolvimentoItem";
import { Typography } from "@mui/material";

export default function EnvolvimentoList({ envolvimentos, onEdit, onDelete }) {
  if (envolvimentos.length === 0) {
    return <Typography>Nenhum envolvimento encontrado.</Typography>;
  }

  return (
    <div>
      {envolvimentos.map((e) => (
        <EnvolvimentoItem key={e.id_envolvimento} envolvimento={e} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
