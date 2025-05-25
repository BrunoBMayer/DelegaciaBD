import AtribuicaoItem from "./AtribuicaoItem";
import { Typography } from "@mui/material";

export default function AtribuicaoList({ atribuicoes, onEdit, onDelete }) {
  if (atribuicoes.length === 0) {
    return <Typography>Nenhuma atribuição encontrada.</Typography>;
  }

  return (
    <div>
      {atribuicoes.map((a) => (
        <AtribuicaoItem key={a.idAtribuicao} atribuicao={a} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
