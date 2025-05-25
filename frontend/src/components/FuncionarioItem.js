import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FuncionarioItem({ funcionario, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{funcionario.nome}</Typography>
            <Typography color="text.secondary">
              Matrícula: {funcionario.matricula} | Cargo: {funcionario.tipoFuncionario}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(funcionario)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(funcionario.matricula)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
