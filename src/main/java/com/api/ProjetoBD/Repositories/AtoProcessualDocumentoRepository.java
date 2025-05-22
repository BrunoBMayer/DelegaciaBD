package com.api.ProjetoBD.Repositories;

import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AtoProcessualDocumentoRepository implements RowMapper<AtoProcessualDocumentoModel> {
    @Override
    public AtoProcessualDocumentoModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        AtoProcessualDocumentoModel a = new AtoProcessualDocumentoModel();
        a.setIdAtoDocumento(rs.getString("id_ato_documento"));
        a.setTipoAtoDocumento(rs.getString("tipo_ato_documento"));
        a.setDataCriacaoAto(rs.getDate("data_criacao_ato"));
        a.setConteudoResumidoOuReferenciaArquivo(rs.getString("conteudo_resumido_ou_referencia_arquivo"));
        a.setFkProcessoInvestigativoIdProcesso(rs.getString("fk_processo_investigativo_id_processo"));
        a.setFkFuncionarioMatriculaAutor(rs.getString("fk_funcionario_matricula_autor"));
        a.setFkPessoaIdAlvoAto(rs.getString("fk_pessoa_id_alvo_ato"));
        return a;
    }
}
