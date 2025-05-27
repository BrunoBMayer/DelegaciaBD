package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.FuncionarioModel;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class FuncionarioRepository {

    private final JdbcTemplate jdbcTemplate;

    public FuncionarioRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Mapeia os dados retornados do banco para o objeto FuncionarioModel
    private FuncionarioModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        FuncionarioModel f = new FuncionarioModel();
        f.setMatricula(rs.getString("matricula"));
        f.setNome(rs.getString("nome"));
        f.setFkCorregedoriaCnpj(rs.getString("fk_Corregedoria_CNPJ"));
        f.setTipoFuncionario(rs.getString("tipo_funcionario"));
        return f;
    }

    // Agora usando a procedure listar_funcionarios()
    // Usando SELECT direto
    public List<FuncionarioModel> listarTodos() {
        String sql = "SELECT * FROM Funcionario";
        return jdbcTemplate.query(sql, this::mapRow);
    }


    public void salvar(FuncionarioModel f) {
        String sql = "INSERT INTO Funcionario (matricula, nome, fk_Corregedoria_CNPJ, tipo_funcionario) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, f.getMatricula(), f.getNome(), f.getFkCorregedoriaCnpj(), f.getTipoFuncionario());
    }

    public FuncionarioModel buscarPorMatricula(String matricula) {
        String sql = "SELECT * FROM Funcionario WHERE matricula = ?";
        return jdbcTemplate.queryForObject(sql, this::mapRow, matricula);
    }

    public void deletar(String matricula) {
        jdbcTemplate.update("DELETE FROM Funcionario WHERE matricula = ?", matricula);
    }

    public void atualizar(FuncionarioModel f) {
        String sql = "UPDATE Funcionario SET nome = ?, fk_Corregedoria_CNPJ = ?, tipo_funcionario = ? WHERE matricula = ?";
        jdbcTemplate.update(sql, f.getNome(), f.getFkCorregedoriaCnpj(), f.getTipoFuncionario(), f.getMatricula());
    }
}
