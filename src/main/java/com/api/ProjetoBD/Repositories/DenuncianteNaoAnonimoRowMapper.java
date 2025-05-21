package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.DenuncianteNaoAnonimo;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DenuncianteNaoAnonimoRowMapper implements RowMapper<DenuncianteNaoAnonimo> {
    @Override
    public DenuncianteNaoAnonimo mapRow(ResultSet rs, int rowNum) throws SQLException {
        DenuncianteNaoAnonimo d = new DenuncianteNaoAnonimo();
        d.setCpf(rs.getString("cpf"));
        d.setDenuncianteAnonimo(rs.getBoolean("denunciante_anonimo"));
        return d;
    }
}

