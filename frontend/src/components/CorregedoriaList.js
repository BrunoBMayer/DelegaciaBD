import CorregedoriaItem from "./CorregedoriaItem";
import { Typography } from "@mui/material";

export default function CorregedoriaList({ corregedorias, onEdit, onDelete }) {
  if (corregedorias.length === 0) {
    return <Typography>Nenhuma corregedoria cadastrada.</Typography>;
  }

  return (
    <div>
      {corregedorias.map((c) => (
        <CorregedoriaItem key={c.cnpj} corregedoria={c} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
