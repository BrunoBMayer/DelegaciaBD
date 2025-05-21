package com.api.ProjetoBD.models;

import lombok.Data;
import java.sql.Date;

@Data
public class DenunciaModel {
    private String idDenuncia;
    private Date dataOcorrencia;
    private Date dataRegistroSistema;
    private String descricaoFato;
    private String statusDenuncia; // Ex: 'Recebida', 'Em Análise', etc.
    private boolean denuncianteAnonimo;
    private String fkFuncionarioMatriculaRegistrou;
    private String fkPessoaIdPessoa;
    private String fkFuncionarioMatriculaAvaliador;

}
// OK
