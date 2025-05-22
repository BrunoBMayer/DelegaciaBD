//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.DenunciaModel;
import com.api.ProjetoBD.Repositories.DenunciaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DenunciaService {

    private final JdbcTemplate jdbcTemplate;

    public DenunciaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(DenunciaModel d) {
        String sql = "INSERT INTO Denuncia (id_denuncia, data_ocorrencia, data_registro_sistema, descricao_fato, status_denuncia, denunciante_anonimo, fk_Funcionario_matricula_registrou, fk_Pessoa_id_pessoa, fk_Funcionario_matricula_avaliador) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                d.getIdDenuncia(),
                d.getDataOcorrencia(),
                d.getDataRegistroSistema(),
                d.getDescricaoFato(),
                d.getStatusDenuncia(),
                d.isDenuncianteAnonimo(),
                d.getFkFuncionarioMatriculaRegistrou(),
                d.getFkPessoaIdPessoa(),
                d.getFkFuncionarioMatriculaAvaliador());
    }

    public List<DenunciaModel> findAll() {
        String sql = "SELECT * FROM Denuncia";
        return jdbcTemplate.query(sql, new DenunciaRepository());
    }

    public DenunciaModel findById(String id) {
        String sql = "SELECT * FROM Denuncia WHERE id_denuncia = ?";
        return jdbcTemplate.queryForObject(sql, new DenunciaRepository(), id);
    }

    public int update(DenunciaModel d) {
        String sql = "UPDATE Denuncia SET data_ocorrencia = ?, data_registro_sistema = ?, descricao_fato = ?, status_denuncia = ?, denunciante_anonimo = ?, fk_Funcionario_matricula_registrou = ?, fk_Pessoa_id_pessoa = ?, fk_Funcionario_matricula_avaliador = ? WHERE id_denuncia = ?";
        return jdbcTemplate.update(sql,
                d.getDataOcorrencia(),
                d.getDataRegistroSistema(),
                d.getDescricaoFato(),
                d.getStatusDenuncia(),
                d.isDenuncianteAnonimo(),
                d.getFkFuncionarioMatriculaRegistrou(),
                d.getFkPessoaIdPessoa(),
                d.getFkFuncionarioMatriculaAvaliador(),
                d.getIdDenuncia());
    }

    public int deleteById(String id) {
        String sql = "DELETE FROM Denuncia WHERE id_denuncia = ?";
        return jdbcTemplate.update(sql, id);
    }
}
