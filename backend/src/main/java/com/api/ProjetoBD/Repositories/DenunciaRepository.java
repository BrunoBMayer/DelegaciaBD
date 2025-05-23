//OK
package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.DenunciaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class DenunciaRepository implements RowMapper<DenunciaModel> {
    @Override
    public DenunciaModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        DenunciaModel e = new DenunciaModel();
        e.setIdDenuncia(rs.getString("id_denuncia"));
        e.setDataOcorrencia(rs.getDate("data_ocorrencia"));
        e.setDataRegistroSistema(rs.getDate("data_registro_sistema"));
        e.setDescricaoFato(rs.getString("descricao_fato"));
        e.setStatusDenuncia(rs.getString("status_denuncia"));
        e.setDenuncianteAnonimo(rs.getBoolean("denunciante_anonimo"));
        e.setFkFuncionarioMatriculaRegistrou(rs.getString("fk_Funcionario_matricula_registrou"));
        e.setFkPessoaIdPessoa(rs.getString("fk_Pessoa_id_pessoa"));
        e.setFkFuncionarioMatriculaAvaliador(rs.getString("fk_Funcionario_matricula_avaliador"));
        return e;
    }
}
