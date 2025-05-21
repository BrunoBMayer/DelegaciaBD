package com.api.ProjetoBD.models;

import lombok.Data;
import java.sql.Date;

@Data
public class AtoProcessualDocumentoModel {
    private String idAtoDocumento;
    private String tipoAtoDocumento;
    private Date dataCriacaoAto;
    private String conteudoResumidoOuReferenciaArquivo;
    private String fkProcessoInvestigativoIdProcesso;
    private String fkFuncionarioMatriculaAutor;
    private String fkPessoaIdAlvoAto;

    // Getters e setters
}
// OK
