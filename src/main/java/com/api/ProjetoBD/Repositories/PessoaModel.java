package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.ProcessoInvestigativoModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PessoaModel implements RowMapper<ProcessoInvestigativoModel> {
    @Override
    public ProcessoInvestigativoModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProcessoInvestigativoModel sec = new ProcessoInvestigativoModel();
        sec.setMatricula(rs.getString("matricula"));
        return sec;
    }
}
