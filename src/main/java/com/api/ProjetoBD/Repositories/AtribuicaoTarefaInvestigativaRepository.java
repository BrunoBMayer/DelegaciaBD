package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.CorregdoriaModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AtribuicaoTarefaInvestigativaRepository implements RowMapper<CorregdoriaModel> {
    @Override
    public CorregdoriaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        CorregdoriaModel d = new CorregdoriaModel();
        d.setCpf(rs.getString("cpf"));
        d.setDenuncianteAnonimo(rs.getBoolean("denunciante_anonimo"));
        return d;
    }
}

