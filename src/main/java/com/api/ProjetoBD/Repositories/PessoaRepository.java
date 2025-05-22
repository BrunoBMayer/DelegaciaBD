//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.PessoaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PessoaRepository implements RowMapper<PessoaModel> {
    @Override
    public PessoaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        PessoaModel p = new PessoaModel();
        p.setIdPessoa(rs.getString("id_pessoa"));
        p.setNome(rs.getString("nome"));
        p.setCpf(rs.getString("CPF"));
        p.setOutrosDadosIdentificacao(rs.getString("outros_dados_identificacao"));
        return p;
    }
}
