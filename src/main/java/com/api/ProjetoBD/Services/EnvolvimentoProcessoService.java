//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.EnvolvimentoProcessoModel;
import com.api.ProjetoBD.Repositories.EnvolvimentoProcessoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnvolvimentoProcessoService {

    private final JdbcTemplate jdbcTemplate;

    public EnvolvimentoProcessoService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(EnvolvimentoProcessoModel e) {
        String sql = "INSERT INTO EnvolvimentoProcesso (id_envolvimento, papel_no_processo, fk_ProcessoInvestigativo_id_processo, fk_Pessoa_id_envolvido) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                e.getIdEnvolvimento(),
                e.getPapelNoProcesso(),
                e.getFkProcessoInvestigativoIdProcesso(),
                e.getFkPessoaIdEnvolvido());
    }

    public List<EnvolvimentoProcessoModel> findAll() {
        String sql = "SELECT * FROM EnvolvimentoProcesso";
        return jdbcTemplate.query(sql, new EnvolvimentoProcessoRepository());
    }

    public EnvolvimentoProcessoModel findById(String id) {
        String sql = "SELECT * FROM EnvolvimentoProcesso WHERE id_envolvimento = ?";
        return jdbcTemplate.queryForObject(sql, new EnvolvimentoProcessoRepository(), id);
    }

    public int update(EnvolvimentoProcessoModel e) {
        String sql = "UPDATE EnvolvimentoProcesso SET papel_no_processo = ?, fk_ProcessoInvestigativo_id_processo = ?, fk_Pessoa_id_envolvido = ? WHERE id_envolvimento = ?";
        return jdbcTemplate.update(sql,
                e.getPapelNoProcesso(),
                e.getFkProcessoInvestigativoIdProcesso(),
                e.getFkPessoaIdEnvolvido(),
                e.getIdEnvolvimento());
    }

    public int deleteById(String id) {
        String sql = "DELETE FROM EnvolvimentoProcesso WHERE id_envolvimento = ?";
        return jdbcTemplate.update(sql, id);
    }
}
