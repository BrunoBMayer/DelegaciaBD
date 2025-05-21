package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AtoProcessualDocumentoRepository implements RowMapper<AtoProcessualDocumentoModel> {
    @Override
    public AtoProcessualDocumentoModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        AtoProcessualDocumentoModel c = new AtoProcessualDocumentoModel();
        c.setCnpj(rs.getString("cnpj"));
        c.setNumero(rs.getString("numero"));
        c.setRua(rs.getString("rua"));
        c.setBairro(rs.getString("bairro"));
        c.setCidade(rs.getString("cidade"));
        return c;
    }
}
