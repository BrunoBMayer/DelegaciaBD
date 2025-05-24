import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PessoaItem({ pessoa, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{pessoa.nome}</Typography>
            <Typography color="text.secondary">
              CPF: {pessoa.CPF} | ID: {pessoa.id_pessoa}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(pessoa)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(pessoa.id_pessoa)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}