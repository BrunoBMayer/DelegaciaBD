//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.AtribuicaoTarefaInvestigativaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AtribuicaoTarefaInvestigativaRepository implements RowMapper<AtribuicaoTarefaInvestigativaModel> {
    @Override
    public AtribuicaoTarefaInvestigativaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        AtribuicaoTarefaInvestigativaModel m = new AtribuicaoTarefaInvestigativaModel();
        m.setIdAtribuicao(rs.getString("id_atribuicao"));
        m.setDescricaoTarefa(rs.getString("descricao_tarefa"));
        m.setDataAtribuicao(rs.getDate("data_atribuicao"));
        m.setPrazoConclusao(rs.getDate("prazo_conclusao"));
        m.setStatusTarefa(rs.getString("status_tarefa"));
        m.setFkProcessoInvestigativoIdProcesso(rs.getString("fk_ProcessoInvestigativo_id_processo"));
        m.setFkFuncionarioMatriculaDesignado(rs.getString("fk_Funcionario_matricula_designado"));
        return m;
    }
}
