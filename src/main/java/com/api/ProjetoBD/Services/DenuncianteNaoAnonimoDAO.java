package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.DenuncianteNaoAnonimo;
import com.api.ProjetoBD.Repositories.DenuncianteNaoAnonimoRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class DenuncianteNaoAnonimoDAO {

    private final JdbcTemplate jdbcTemplate;

    public DenuncianteNaoAnonimoDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(DenuncianteNaoAnonimo d) {
        String sql = "INSERT INTO DenuncianteNaoAnonimo (cpf, denunciante_anonimo) VALUES (?, ?)";
        return jdbcTemplate.update(sql, d.getCpf(), d.isDenuncianteAnonimo());
    }

    // READ ALL
    public List<DenuncianteNaoAnonimo> findAll() {
        String sql = "SELECT * FROM DenuncianteNaoAnonimo";
        return jdbcTemplate.query(sql, new DenuncianteNaoAnonimoRowMapper());
    }

    // READ ONE
    public DenuncianteNaoAnonimo findByCpfAndAnonimo(String cpf, boolean denuncianteAnonimo) {
        String sql = "SELECT * FROM DenuncianteNaoAnonimo WHERE cpf = ? AND denunciante_anonimo = ?";
        return jdbcTemplate.queryForObject(sql, new DenuncianteNaoAnonimoRowMapper(), cpf, denuncianteAnonimo);
    }

    // DELETE
    public int deleteByCpfAndAnonimo(String cpf, boolean denuncianteAnonimo) {
        String sql = "DELETE FROM DenuncianteNaoAnonimo WHERE cpf = ? AND denunciante_anonimo = ?";
        return jdbcTemplate.update(sql, cpf, denuncianteAnonimo);
    }
}
