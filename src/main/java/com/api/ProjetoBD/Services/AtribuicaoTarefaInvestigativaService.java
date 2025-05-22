package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.AtribuicaoTarefaInvestigativaModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class AtribuicaoTarefaInvestigativaService {

    private final JdbcTemplate jdbcTemplate;

    public AtribuicaoTarefaInvestigativaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(AtribuicaoTarefaInvestigativaModel d) {
        String sql = "INSERT INTO Denunciante (anonimo) VALUES (?)";
        return jdbcTemplate.update(sql, d.isAnonimo());
    }

    // READ ALL
    public List<AtribuicaoTarefaInvestigativaModel> findAll() {
        String sql = "SELECT * FROM Denunciante";
        return jdbcTemplate.query(sql, new AtribuicaoMapper());
    }

    public AtribuicaoTarefaInvestigativaModel findByAnonimo(boolean anonimo) {
        String sql = "SELECT * FROM Denunciante WHERE anonimo = ?";
        return jdbcTemplate.queryForObject(sql, new AtribuicaoMapper(), anonimo);
    }

    // DELETE
    public int deleteByAnonimo(boolean anonimo) {
        String sql = "DELETE FROM Denunciante WHERE anonimo = ?";
        return jdbcTemplate.update(sql, anonimo);
    }

    // RowMapper interno
    private static class AtribuicaoMapper implements RowMapper<AtribuicaoTarefaInvestigativaModel> {
        @Override
        public AtribuicaoTarefaInvestigativaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
            AtribuicaoTarefaInvestigativaModel model = new AtribuicaoTarefaInvestigativaModel();
            model.setAnonimo(rs.getBoolean("anonimo"));
            return model;
        }
    }
}
