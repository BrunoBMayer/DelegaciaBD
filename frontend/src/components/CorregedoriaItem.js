import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CorregedoriaItem({ corregedoria, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{corregedoria.nome}</Typography>
            <Typography variant="body2">CNPJ: {corregedoria.cnpj}</Typography>
            <Typography variant="body2">
              {corregedoria.enderecoRua}, {corregedoria.enderecoBairro} - {corregedoria.enderecoCidade}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(corregedoria)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(corregedoria.cnpj)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
