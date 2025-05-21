package com.api.ProjetoBD.models;

import lombok.Data;
import java.sql.Date;


public class EnvolvimentoProcessoModel {
    private String idEnvolvimento;
    private String papelNoProcesso; // 'Investigado', 'Indiciado', etc.
    private String fkProcessoInvestigativoIdProcesso;
    private String fkPessoaIdEnvolvido;

    // Getters e setters
}

// OK

