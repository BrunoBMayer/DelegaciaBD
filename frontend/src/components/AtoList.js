import AtoItem from "./AtoItem";
import { Typography } from "@mui/material";

export default function AtoList({ atos, onEdit, onDelete }) {
  if (atos.length === 0) {
    return <Typography>Nenhum ato encontrado.</Typography>;
  }

  return (
    <div>
      {atos.map((a) => (
        <AtoItem key={a.id_ato_documento} ato={a} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
