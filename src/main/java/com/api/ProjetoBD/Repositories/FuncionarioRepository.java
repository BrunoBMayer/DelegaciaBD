package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.PessoaModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FuncionarioRepository implements RowMapper<PessoaModel> {
    @Override
    public PessoaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        PessoaModel inv = new PessoaModel();
        inv.setMatricula(rs.getString("matricula"));
        return inv;
    }
}

