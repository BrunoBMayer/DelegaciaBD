import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProcessoItem({ processo, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{processo.tipoProcesso} - {processo.idProcesso}</Typography>
            <Typography color="text.secondary">
              Status: {processo.statusProcesso} | Responsável: {processo.fkFuncionarioMatriculaResponsavelPrincipal}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(processo)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(processo.idProcesso)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
