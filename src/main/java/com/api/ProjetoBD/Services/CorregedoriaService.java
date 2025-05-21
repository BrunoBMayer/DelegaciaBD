package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.CorregdoriaModel;
import com.api.ProjetoBD.Repositories.AtribuicaoTarefaInvestigativaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class CorregedoriaService {

    private final JdbcTemplate jdbcTemplate;

    public CorregedoriaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // CREATE
    public int save(CorregdoriaModel d) {
        String sql = "INSERT INTO DenuncianteNaoAnonimo (cpf, denunciante_anonimo) VALUES (?, ?)";
        return jdbcTemplate.update(sql, d.getCpf(), d.isDenuncianteAnonimo());
    }

    // READ ALL
    public List<CorregdoriaModel> findAll() {
        String sql = "SELECT * FROM DenuncianteNaoAnonimo";
        return jdbcTemplate.query(sql, new AtribuicaoTarefaInvestigativaRepository());
    }

    // READ ONE
    public CorregdoriaModel findByCpfAndAnonimo(String cpf, boolean denuncianteAnonimo) {
        String sql = "SELECT * FROM DenuncianteNaoAnonimo WHERE cpf = ? AND denunciante_anonimo = ?";
        return jdbcTemplate.queryForObject(sql, new AtribuicaoTarefaInvestigativaRepository(), cpf, denuncianteAnonimo);
    }

    // DELETE
    public int deleteByCpfAndAnonimo(String cpf, boolean denuncianteAnonimo) {
        String sql = "DELETE FROM DenuncianteNaoAnonimo WHERE cpf = ? AND denunciante_anonimo = ?";
        return jdbcTemplate.update(sql, cpf, denuncianteAnonimo);
    }
}
