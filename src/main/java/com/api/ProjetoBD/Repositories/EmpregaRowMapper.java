package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Emprega;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class EmpregaRowMapper implements RowMapper<Emprega> {
    @Override
    public Emprega mapRow(ResultSet rs, int rowNum) throws SQLException {
        Emprega e = new Emprega();
        e.setIdFuncionario(rs.getString("id_funcionario"));
        e.setIdCorregedoria(rs.getInt("id_corregedoria"));
        return e;
    }
}
