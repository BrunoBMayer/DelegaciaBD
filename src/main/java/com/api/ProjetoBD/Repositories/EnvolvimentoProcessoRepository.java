//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.EnvolvimentoProcessoModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EnvolvimentoProcessoRepository implements RowMapper<EnvolvimentoProcessoModel> {
    @Override
    public EnvolvimentoProcessoModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        EnvolvimentoProcessoModel e = new EnvolvimentoProcessoModel();
        e.setIdEnvolvimento(rs.getString("id_envolvimento"));
        e.setPapelNoProcesso(rs.getString("papel_no_processo"));
        e.setFkProcessoInvestigativoIdProcesso(rs.getString("fk_ProcessoInvestigativo_id_processo"));
        e.setFkPessoaIdEnvolvido(rs.getString("fk_Pessoa_id_envolvido"));
        return e;
    }
}
