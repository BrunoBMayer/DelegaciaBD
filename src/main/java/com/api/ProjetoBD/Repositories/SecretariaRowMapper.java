package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Secretaria;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SecretariaRowMapper implements RowMapper<Secretaria> {
    @Override
    public Secretaria mapRow(ResultSet rs, int rowNum) throws SQLException {
        Secretaria sec = new Secretaria();
        sec.setMatricula(rs.getString("matricula"));
        return sec;
    }
}
