package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.FuncionarioModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class EnvolvimentoProcessoRepository implements RowMapper<FuncionarioModel> {
    @Override
    public FuncionarioModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        FuncionarioModel f = new FuncionarioModel();
        f.setMatricula(rs.getString("matricula"));
        f.setNome(rs.getString("nome"));
        return f;
    }
}
