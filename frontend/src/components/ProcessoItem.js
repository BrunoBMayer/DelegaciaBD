import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProcessoItem({ processo, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{processo.tipo_processo} - {processo.id_processo}</Typography>
            <Typography color="text.secondary">
              Status: {processo.status_processo} | Responsável: {processo.fk_Funcionario_matricula_responsavel_principal}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(processo)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(processo.id_processo)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
