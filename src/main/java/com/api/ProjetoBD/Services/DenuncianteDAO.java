package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.Denunciante;
import com.api.ProjetoBD.Repositories.DenuncianteRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class DenuncianteDAO {

    private final JdbcTemplate jdbcTemplate;

    public DenuncianteDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(Denunciante d) {
        String sql = "INSERT INTO Denunciante (anonimo) VALUES (?)";
        return jdbcTemplate.update(sql, d.isAnonimo());
    }

    // READ ALL
    public List<Denunciante> findAll() {
        String sql = "SELECT * FROM Denunciante";
        return jdbcTemplate.query(sql, new DenuncianteRowMapper());
    }

    public Denunciante findByAnonimo(boolean anonimo) {
        String sql = "SELECT * FROM Denunciante WHERE anonimo = ?";
        return jdbcTemplate.queryForObject(sql, new DenuncianteRowMapper(), anonimo);
    }


    // DELETE
    public int deleteByAnonimo(boolean anonimo) {
        String sql = "DELETE FROM Denunciante WHERE anonimo = ?";
        return jdbcTemplate.update(sql, anonimo);
    }
}
