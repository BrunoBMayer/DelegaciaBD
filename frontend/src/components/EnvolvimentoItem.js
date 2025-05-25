import { Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EnvolvimentoItem({ envolvimento, onEdit, onDelete }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{envolvimento.papelNoProcesso}</Typography>
            <Typography color="text.secondary">
              Processo: {envolvimento.fkProcessoInvestigativoIdProcesso} | Pessoa: {envolvimento.fkPessoaIdEnvolvido}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => onEdit(envolvimento)}><EditIcon /></IconButton>
            <IconButton onClick={() => onDelete(envolvimento.idEnvolvimento)}><DeleteIcon /></IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
