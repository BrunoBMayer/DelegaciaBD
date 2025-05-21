package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import com.api.ProjetoBD.Repositories.AtoProcessualDocumentoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AtoProcessualDocumentoService {

    private final JdbcTemplate jdbcTemplate;

    public AtoProcessualDocumentoService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(AtoProcessualDocumentoModel corregedoria) {
        String sql = "INSERT INTO CorregedoriaModel (cnpj, numero, rua, bairro, cidade) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                corregedoria.getCnpj(),
                corregedoria.getNumero(),
                corregedoria.getRua(),
                corregedoria.getBairro(),
                corregedoria.getCidade());
    }

    // READ ALL
    public List<AtoProcessualDocumentoModel> findAll() {
        String sql = "SELECT * FROM CorregedoriaModel";
        return jdbcTemplate.query(sql, new AtoProcessualDocumentoRepository());
    }

    // READ ONE
    public AtoProcessualDocumentoModel findByCnpj(String cnpj) {
        String sql = "SELECT * FROM CorregedoriaModel WHERE cnpj = ?";
        return jdbcTemplate.queryForObject(sql, new AtoProcessualDocumentoRepository(), cnpj);
    }

    // UPDATE
    public int update(AtoProcessualDocumentoModel corregedoria) {
        String sql = "UPDATE CorregedoriaModel SET numero = ?, rua = ?, bairro = ?, cidade = ? WHERE cnpj = ?";
        return jdbcTemplate.update(sql,
                corregedoria.getNumero(),
                corregedoria.getRua(),
                corregedoria.getBairro(),
                corregedoria.getCidade(),
                corregedoria.getCnpj());
    }

    // DELETE
    public int deleteByCnpj(String cnpj) {
        String sql = "DELETE FROM CorregedoriaModel WHERE cnpj = ?";
        return jdbcTemplate.update(sql, cnpj);
    }
}
