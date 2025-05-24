import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AtoItem({ ato, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{ato.tipo_ato_documento}</Typography>
            <Typography color="text.secondary">
              Autor: {ato.fk_Funcionario_matricula_autor} | Processo: {ato.fk_ProcessoInvestigativo_id_processo}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(ato)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(ato.id_ato_documento)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
