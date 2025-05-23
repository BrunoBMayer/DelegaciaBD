//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.ProcessoInvestigativoModel;
import com.api.ProjetoBD.Repositories.ProcessoInvestigativoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcessoInvestigativoService {

    private final JdbcTemplate jdbcTemplate;

    public ProcessoInvestigativoService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(ProcessoInvestigativoModel p) {
        String sql = "INSERT INTO ProcessoInvestigativo (id_processo, numero_protocolo_interno, tipo_processo, data_abertura, data_conclusao, status_processo, descricao_resumida_objeto, fk_Funcionario_matricula_responsavel_principal, fk_Denuncia_id_origem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                p.getIdProcesso(),
                p.getNumeroProtocoloInterno(),
                p.getTipoProcesso(),
                p.getDataAbertura(),
                p.getDataConclusao(),
                p.getStatusProcesso(),
                p.getDescricaoResumidaObjeto(),
                p.getFkFuncionarioMatriculaResponsavelPrincipal(),
                p.getFkDenunciaIdOrigem());
    }

    public List<ProcessoInvestigativoModel> findAll() {
        String sql = "SELECT * FROM ProcessoInvestigativo";
        return jdbcTemplate.query(sql, new ProcessoInvestigativoRepository());
    }

    public ProcessoInvestigativoModel findById(String id) {
        String sql = "SELECT * FROM ProcessoInvestigativo WHERE id_processo = ?";
        return jdbcTemplate.queryForObject(sql, new ProcessoInvestigativoRepository(), id);
    }

    public int update(ProcessoInvestigativoModel p) {
        String sql = "UPDATE ProcessoInvestigativo SET numero_protocolo_interno = ?, tipo_processo = ?, data_abertura = ?, data_conclusao = ?, status_processo = ?, descricao_resumida_objeto = ?, fk_Funcionario_matricula_responsavel_principal = ?, fk_Denuncia_id_origem = ? WHERE id_processo = ?";
        return jdbcTemplate.update(sql,
                p.getNumeroProtocoloInterno(),
                p.getTipoProcesso(),
                p.getDataAbertura(),
                p.getDataConclusao(),
                p.getStatusProcesso(),
                p.getDescricaoResumidaObjeto(),
                p.getFkFuncionarioMatriculaResponsavelPrincipal(),
                p.getFkDenunciaIdOrigem(),
                p.getIdProcesso());
    }

    public int deleteById(String id) {
        String sql = "DELETE FROM ProcessoInvestigativo WHERE id_processo = ?";
        return jdbcTemplate.update(sql, id);
    }
}
