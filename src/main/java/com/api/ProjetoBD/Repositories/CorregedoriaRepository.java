package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.AtribuicaoTarefaInvstigativaModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CorregedoriaRepository implements RowMapper<AtribuicaoTarefaInvstigativaModel> {
    @Override
    public AtribuicaoTarefaInvstigativaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        AtribuicaoTarefaInvstigativaModel d = new AtribuicaoTarefaInvstigativaModel();
        d.setAnonimo(rs.getBoolean("anonimo"));
        return d;
    }
}
