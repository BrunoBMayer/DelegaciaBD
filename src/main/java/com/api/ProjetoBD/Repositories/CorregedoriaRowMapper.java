package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.Corregedoria;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CorregedoriaRowMapper implements RowMapper<Corregedoria> {
    @Override
    public Corregedoria mapRow(ResultSet rs, int rowNum) throws SQLException {
        Corregedoria c = new Corregedoria();
        c.setCnpj(rs.getString("cnpj"));
        c.setNumero(rs.getString("numero"));
        c.setRua(rs.getString("rua"));
        c.setBairro(rs.getString("bairro"));
        c.setCidade(rs.getString("cidade"));
        return c;
    }
}
