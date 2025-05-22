//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.CorregedoriaModel;
import com.api.ProjetoBD.Repositories.CorregedoriaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CorregedoriaService {

    private final JdbcTemplate jdbcTemplate;

    public CorregedoriaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(CorregedoriaModel c) {
        String sql = "INSERT INTO Corregedoria (CNPJ, nome, endereco_rua, endereco_bairro, endereco_cidade) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                c.getCnpj(),
                c.getNome(),
                c.getEnderecoRua(),
                c.getEnderecoBairro(),
                c.getEnderecoCidade());
    }

    public List<CorregedoriaModel> findAll() {
        String sql = "SELECT * FROM Corregedoria";
        return jdbcTemplate.query(sql, new CorregedoriaRepository());
    }

    public CorregedoriaModel findByCnpj(String cnpj) {
        String sql = "SELECT * FROM Corregedoria WHERE CNPJ = ?";
        return jdbcTemplate.queryForObject(sql, new CorregedoriaRepository(), cnpj);
    }

    public int update(CorregedoriaModel c) {
        String sql = "UPDATE Corregedoria SET nome = ?, endereco_rua = ?, endereco_bairro = ?, endereco_cidade = ? WHERE CNPJ = ?";
        return jdbcTemplate.update(sql,
                c.getNome(),
                c.getEnderecoRua(),
                c.getEnderecoBairro(),
                c.getEnderecoCidade(),
                c.getCnpj());
    }

    public int deleteByCnpj(String cnpj) {
        String sql = "DELETE FROM Corregedoria WHERE CNPJ = ?";
        return jdbcTemplate.update(sql, cnpj);
    }
}
