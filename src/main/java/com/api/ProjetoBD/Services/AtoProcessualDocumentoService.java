package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import com.api.ProjetoBD.Repositories.AtoProcessualDocumentoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtoProcessualDocumentoService {

    private final JdbcTemplate jdbcTemplate;

    public AtoProcessualDocumentoService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int save(AtoProcessualDocumentoModel a) {
        String sql = "INSERT INTO AtoProcessualDocumento (id_ato_documento, tipo_ato_documento, data_criacao_ato, conteudo_resumido_ou_referencia_arquivo, fk_processo_investigativo_id_processo, fk_funcionario_matricula_autor, fk_pessoa_id_alvo_ato) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                a.getIdAtoDocumento(),
                a.getTipoAtoDocumento(),
                a.getDataCriacaoAto(),
                a.getConteudoResumidoOuReferenciaArquivo(),
                a.getFkProcessoInvestigativoIdProcesso(),
                a.getFkFuncionarioMatriculaAutor(),
                a.getFkPessoaIdAlvoAto());
    }

    public List<AtoProcessualDocumentoModel> findAll() {
        String sql = "SELECT * FROM AtoProcessualDocumento";
        return jdbcTemplate.query(sql, new AtoProcessualDocumentoRepository());
    }

    public AtoProcessualDocumentoModel findById(String id) {
        String sql = "SELECT * FROM AtoProcessualDocumento WHERE id_ato_documento = ?";
        return jdbcTemplate.queryForObject(sql, new AtoProcessualDocumentoRepository(), id);
    }

    public int update(AtoProcessualDocumentoModel a) {
        String sql = "UPDATE AtoProcessualDocumento SET tipo_ato_documento = ?, data_criacao_ato = ?, conteudo_resumido_ou_referencia_arquivo = ?, fk_processo_investigativo_id_processo = ?, fk_funcionario_matricula_autor = ?, fk_pessoa_id_alvo_ato = ? WHERE id_ato_documento = ?";
        return jdbcTemplate.update(sql,
                a.getTipoAtoDocumento(),
                a.getDataCriacaoAto(),
                a.getConteudoResumidoOuReferenciaArquivo(),
                a.getFkProcessoInvestigativoIdProcesso(),
                a.getFkFuncionarioMatriculaAutor(),
                a.getFkPessoaIdAlvoAto(),
                a.getIdAtoDocumento());
    }

    public int deleteById(String id) {
        String sql = "DELETE FROM AtoProcessualDocumento WHERE id_ato_documento = ?";
        return jdbcTemplate.update(sql, id);
    }
}
