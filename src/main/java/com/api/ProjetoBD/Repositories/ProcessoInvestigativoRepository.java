//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.ProcessoInvestigativoModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProcessoInvestigativoRepository implements RowMapper<ProcessoInvestigativoModel> {
    @Override
    public ProcessoInvestigativoModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProcessoInvestigativoModel p = new ProcessoInvestigativoModel();
        p.setIdProcesso(rs.getString("id_processo"));
        p.setNumeroProtocoloInterno(rs.getString("numero_protocolo_interno"));
        p.setTipoProcesso(rs.getString("tipo_processo"));
        p.setDataAbertura(rs.getDate("data_abertura"));
        p.setDataConclusao(rs.getDate("data_conclusao"));
        p.setStatusProcesso(rs.getString("status_processo"));
        p.setDescricaoResumidaObjeto(rs.getString("descricao_resumida_objeto"));
        p.setFkFuncionarioMatriculaResponsavelPrincipal(rs.getString("fk_Funcionario_matricula_responsavel_principal"));
        p.setFkDenunciaIdOrigem(rs.getString("fk_Denuncia_id_origem"));
        return p;
    }
}
