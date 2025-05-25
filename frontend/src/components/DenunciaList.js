import DenunciaItem from "./DenunciaItem";
import { Typography } from "@mui/material";

export default function DenunciaList({ denuncias, onEdit, onDelete }) {
  if (denuncias.length === 0) {
    return <Typography>Nenhuma denúncia encontrada.</Typography>;
  }

  return (
    <div>
      {denuncias.map((d) => (
        <DenunciaItem key={d.idDenuncia} denuncia={d} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
