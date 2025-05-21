package com.api.ProjetoBD.models;

import lombok.Data;
import java.sql.Date;

@Data
public class ProcessoInvestigativoModel {
    private String idProcesso;
    private String numeroProtocoloInterno;
    private String tipoProcesso; // 'Sindicância', 'PAD', etc.
    private Date dataAbertura;
    private Date dataConclusao;
    private String statusProcesso;
    private String descricaoResumidaObjeto;
    private String fkFuncionarioMatriculaResponsavelPrincipal;
    private String fkDenunciaIdOrigem;

}

// OK