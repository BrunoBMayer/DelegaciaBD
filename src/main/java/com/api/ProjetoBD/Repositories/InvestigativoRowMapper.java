package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Investigativo;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class InvestigativoRowMapper implements RowMapper<Investigativo> {
    @Override
    public Investigativo mapRow(ResultSet rs, int rowNum) throws SQLException {
        Investigativo inv = new Investigativo();
        inv.setMatricula(rs.getString("matricula"));
        return inv;
    }
}

