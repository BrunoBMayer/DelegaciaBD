package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.Corregedoria;
import com.api.ProjetoBD.Repositories.CorregedoriaRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CorregedoriaDAO {

    private final JdbcTemplate jdbcTemplate;

    public CorregedoriaDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(Corregedoria corregedoria) {
        String sql = "INSERT INTO Corregedoria (cnpj, numero, rua, bairro, cidade) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                corregedoria.getCnpj(),
                corregedoria.getNumero(),
                corregedoria.getRua(),
                corregedoria.getBairro(),
                corregedoria.getCidade());
    }

    // READ ALL
    public List<Corregedoria> findAll() {
        String sql = "SELECT * FROM Corregedoria";
        return jdbcTemplate.query(sql, new CorregedoriaRowMapper());
    }

    // READ ONE
    public Corregedoria findByCnpj(String cnpj) {
        String sql = "SELECT * FROM Corregedoria WHERE cnpj = ?";
        return jdbcTemplate.queryForObject(sql, new CorregedoriaRowMapper(), cnpj);
    }

    // UPDATE
    public int update(Corregedoria corregedoria) {
        String sql = "UPDATE Corregedoria SET numero = ?, rua = ?, bairro = ?, cidade = ? WHERE cnpj = ?";
        return jdbcTemplate.update(sql,
                corregedoria.getNumero(),
                corregedoria.getRua(),
                corregedoria.getBairro(),
                corregedoria.getCidade(),
                corregedoria.getCnpj());
    }

    // DELETE
    public int deleteByCnpj(String cnpj) {
        String sql = "DELETE FROM Corregedoria WHERE cnpj = ?";
        return jdbcTemplate.update(sql, cnpj);
    }
}
