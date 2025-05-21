package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Funcionario;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FuncionarioRowMapper implements RowMapper<Funcionario> {
    @Override
    public Funcionario mapRow(ResultSet rs, int rowNum) throws SQLException {
        Funcionario f = new Funcionario();
        f.setMatricula(rs.getString("matricula"));
        f.setNome(rs.getString("nome"));
        return f;
    }
}
