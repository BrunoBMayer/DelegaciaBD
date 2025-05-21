package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.DenunciaModel;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class EmpregaRowMapper implements RowMapper<DenunciaModel> {
    @Override
    public DenunciaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        DenunciaModel e = new DenunciaModel();
        e.setIdFuncionario(rs.getString("id_funcionario"));
        e.setIdCorregedoria(rs.getInt("id_corregedoria"));
        return e;
    }
}
