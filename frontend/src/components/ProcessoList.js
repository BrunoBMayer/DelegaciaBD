import ProcessoItem from "./ProcessoItem";
import { Typography } from "@mui/material";

export default function ProcessoList({ processos, onEdit, onDelete }) {
  if (processos.length === 0) {
    return <Typography>Nenhum processo encontrado.</Typography>;
  }

  return (
    <div>
      {processos.map((p) => (
        <ProcessoItem key={p.idProcesso} processo={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
