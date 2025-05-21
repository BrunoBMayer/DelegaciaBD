package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.PessoaModel;
import com.api.ProjetoBD.Repositories.InvestigativoRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InvestigativoDAO {

    private final JdbcTemplate jdbcTemplate;

    public InvestigativoDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(PessoaModel inv) {
        String sql = "INSERT INTO Investigativo (matricula) VALUES (?)";
        return jdbcTemplate.update(sql, inv.getMatricula());
    }

    // READ ALL
    public List<PessoaModel> findAll() {
        String sql = "SELECT * FROM Investigativo";
        return jdbcTemplate.query(sql, new InvestigativoRowMapper());
    }

    // READ ONE
    public PessoaModel findByMatricula(String matricula) {
        String sql = "SELECT * FROM Investigativo WHERE matricula = ?";
        return jdbcTemplate.queryForObject(sql, new InvestigativoRowMapper(), matricula);
    }

    // DELETE
    public int deleteByMatricula(String matricula) {
        String sql = "DELETE FROM Investigativo WHERE matricula = ?";
        return jdbcTemplate.update(sql, matricula);
    }
}

