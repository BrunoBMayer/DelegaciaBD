package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Denunciante;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DenuncianteRowMapper implements RowMapper<Denunciante> {
    @Override
    public Denunciante mapRow(ResultSet rs, int rowNum) throws SQLException {
        Denunciante d = new Denunciante();
        d.setAnonimo(rs.getBoolean("anonimo"));
        return d;
    }
}
