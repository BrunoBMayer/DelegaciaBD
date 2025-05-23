//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.CorregedoriaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CorregedoriaRepository implements RowMapper<CorregedoriaModel> {
    @Override
    public CorregedoriaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        CorregedoriaModel c = new CorregedoriaModel();
        c.setCnpj(rs.getString("CNPJ"));
        c.setNome(rs.getString("nome"));
        c.setEnderecoRua(rs.getString("endereco_rua"));
        c.setEnderecoBairro(rs.getString("endereco_bairro"));
        c.setEnderecoCidade(rs.getString("endereco_cidade"));
        return c;
    }
}
