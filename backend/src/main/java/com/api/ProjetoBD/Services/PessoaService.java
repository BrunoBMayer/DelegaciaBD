//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.PessoaModel;
import com.api.ProjetoBD.Repositories.PessoaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    private final JdbcTemplate jdbcTemplate;

    public PessoaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int salvar(PessoaModel p) {
        String sql = "INSERT INTO Pessoa (id_pessoa, nome, CPF, outros_dados_identificacao) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, p.getIdPessoa(), p.getNome(), p.getCpf(), p.getOutrosDadosIdentificacao());
    }

    public List<PessoaModel> listar() {
        String sql = "SELECT * FROM Pessoa";
        return jdbcTemplate.query(sql, new PessoaRepository());
    }

    public PessoaModel buscarPorId(String id) {
        String sql = "SELECT * FROM Pessoa WHERE id_pessoa = ?";
        return jdbcTemplate.queryForObject(sql, new PessoaRepository(), id);
    }

    public int atualizar(PessoaModel p) {
        String sql = "UPDATE Pessoa SET nome = ?, CPF = ?, outros_dados_identificacao = ? WHERE id_pessoa = ?";
        return jdbcTemplate.update(sql, p.getNome(), p.getCpf(), p.getOutrosDadosIdentificacao(), p.getIdPessoa());
    }

    public int deletar(String id) {
        String sql = "DELETE FROM Pessoa WHERE id_pessoa = ?";
        return jdbcTemplate.update(sql, id);
    }
}
