import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AtribuicaoItem({ atribuicao, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{atribuicao.descricaoTarefa?.slice(0, 50)}...</Typography>
            <Typography color="text.secondary">
              Status: {atribuicao.statusTarefa} | Funcionário: {atribuicao.fkFuncionarioMatriculaDesignado}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(atribuicao)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(atribuicao.idAtribuicao)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
