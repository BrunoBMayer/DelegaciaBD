import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DenunciaItem({ denuncia, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{denuncia.descricao_fato?.slice(0, 50)}...</Typography>
            <Typography color="text.secondary">
              Status: {denuncia.status_denuncia} | ID: {denuncia.id_denuncia}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(denuncia)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(denuncia.id_denuncia)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
