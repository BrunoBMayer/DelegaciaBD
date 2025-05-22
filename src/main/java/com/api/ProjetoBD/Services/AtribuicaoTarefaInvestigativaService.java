//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.AtribuicaoTarefaInvestigativaModel;
import com.api.ProjetoBD.Repositories.AtribuicaoTarefaInvestigativaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtribuicaoTarefaInvestigativaService {

    private final JdbcTemplate jdbcTemplate;

    public AtribuicaoTarefaInvestigativaService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(AtribuicaoTarefaInvestigativaModel a) {
        String sql = "INSERT INTO AtribuicaoTarefaInvestigativa (id_atribuicao, descricao_tarefa, data_atribuicao, prazo_conclusao, status_tarefa, fk_ProcessoInvestigativo_id_processo, fk_Funcionario_matricula_designado) VALUES (?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                a.getIdAtribuicao(),
                a.getDescricaoTarefa(),
                a.getDataAtribuicao(),
                a.getPrazoConclusao(),
                a.getStatusTarefa(),
                a.getFkProcessoInvestigativoIdProcesso(),
                a.getFkFuncionarioMatriculaDesignado());
    }

    public List<AtribuicaoTarefaInvestigativaModel> findAll() {
        String sql = "SELECT * FROM AtribuicaoTarefaInvestigativa";
        return jdbcTemplate.query(sql, new AtribuicaoTarefaInvestigativaRepository());
    }

    public AtribuicaoTarefaInvestigativaModel findById(String id) {
        String sql = "SELECT * FROM AtribuicaoTarefaInvestigativa WHERE id_atribuicao = ?";
        return jdbcTemplate.queryForObject(sql, new AtribuicaoTarefaInvestigativaRepository(), id);
    }

    public int update(AtribuicaoTarefaInvestigativaModel a) {
        String sql = "UPDATE AtribuicaoTarefaInvestigativa SET descricao_tarefa = ?, data_atribuicao = ?, prazo_conclusao = ?, status_tarefa = ?, fk_ProcessoInvestigativo_id_processo = ?, fk_Funcionario_matricula_designado = ? WHERE id_atribuicao = ?";
        return jdbcTemplate.update(sql,
                a.getDescricaoTarefa(),
                a.getDataAtribuicao(),
                a.getPrazoConclusao(),
                a.getStatusTarefa(),
                a.getFkProcessoInvestigativoIdProcesso(),
                a.getFkFuncionarioMatriculaDesignado(),
                a.getIdAtribuicao());
    }

    public int deleteById(String id) {
        String sql = "DELETE FROM AtribuicaoTarefaInvestigativa WHERE id_atribuicao = ?";
        return jdbcTemplate.update(sql, id);
    }
}
