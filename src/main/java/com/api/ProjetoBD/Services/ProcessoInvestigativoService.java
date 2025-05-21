package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.ProcessoInvestigativoModel;
import com.api.ProjetoBD.Repositories.PessoaModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProcessoInvestigativoService {

    private final JdbcTemplate jdbcTemplate;

    public ProcessoInvestigativoService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(ProcessoInvestigativoModel sec) {
        String sql = "INSERT INTO Secretaria (matricula) VALUES (?)";
        return jdbcTemplate.update(sql, sec.getMatricula());
    }

    // READ ALL
    public List<ProcessoInvestigativoModel> findAll() {
        String sql = "SELECT * FROM Secretaria";
        return jdbcTemplate.query(sql, new PessoaModel());
    }

    // READ ONE
    public ProcessoInvestigativoModel findByMatricula(String matricula) {
        String sql = "SELECT * FROM Secretaria WHERE matricula = ?";
        return jdbcTemplate.queryForObject(sql, new PessoaModel(), matricula);
    }

    // DELETE
    public int deleteByMatricula(String matricula) {
        String sql = "DELETE FROM Secretaria WHERE matricula = ?";
        return jdbcTemplate.update(sql, matricula);
    }
}

