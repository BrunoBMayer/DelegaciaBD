package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.DenunciaModel;
import com.api.ProjetoBD.Repositories.DenunciaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmpregaDAO {

    private final JdbcTemplate jdbcTemplate;

    public EmpregaDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(DenunciaModel emp) {
        String sql = "INSERT INTO Emprega (id_funcionario, id_corregedoria) VALUES (?, ?)";
        return jdbcTemplate.update(sql, emp.getIdFuncionario(), emp.getIdCorregedoria());
    }

    // READ ALL
    public List<DenunciaModel> findAll() {
        String sql = "SELECT * FROM Emprega";
        return jdbcTemplate.query(sql, new DenunciaRepository());
    }

    // FIND ONE
    public DenunciaModel findByIds(String idFuncionario, int idCorregedoria) {
        String sql = "SELECT * FROM Emprega WHERE id_funcionario = ? AND id_corregedoria = ?";
        return jdbcTemplate.queryForObject(sql, new DenunciaRepository(), idFuncionario, idCorregedoria);
    }

    // DELETE
    public int deleteByIds(String idFuncionario, int idCorregedoria) {
        String sql = "DELETE FROM Emprega WHERE id_funcionario = ? AND id_corregedoria = ?";
        return jdbcTemplate.update(sql, idFuncionario, idCorregedoria);
    }
}
