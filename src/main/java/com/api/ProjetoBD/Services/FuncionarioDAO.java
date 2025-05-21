package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.Funcionario;
import com.api.ProjetoBD.Repositories.FuncionarioRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FuncionarioDAO {

    private final JdbcTemplate jdbcTemplate;

    public FuncionarioDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(Funcionario funcionario) {
        String sql = "INSERT INTO Funcionario (matricula, nome) VALUES (?, ?)";
        return jdbcTemplate.update(sql,
                funcionario.getMatricula(),
                funcionario.getNome());
    }

    // READ ALL
    public List<Funcionario> findAll() {
        String sql = "SELECT * FROM Funcionario";
        return jdbcTemplate.query(sql, new FuncionarioRowMapper());
    }

    // READ ONE
    public Funcionario findByMatricula(String matricula) {
        String sql = "SELECT * FROM Funcionario WHERE matricula = ?";
        return jdbcTemplate.queryForObject(sql, new FuncionarioRowMapper(), matricula);
    }

    // UPDATE
    public int update(Funcionario funcionario) {
        String sql = "UPDATE Funcionario SET nome = ? WHERE matricula = ?";
        return jdbcTemplate.update(sql,
                funcionario.getNome(),
                funcionario.getMatricula());
    }

    // DELETE
    public int deleteByMatricula(String matricula) {
        String sql = "DELETE FROM Funcionario WHERE matricula = ?";
        return jdbcTemplate.update(sql, matricula);
    }
}
