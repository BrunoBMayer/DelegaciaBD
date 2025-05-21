package com.api.ProjetoBD.models;

import lombok.Data;
import java.sql.Date;

public class AtribuicaoTarefaInvestigativaModel {
    private String idAtribuicao;
    private String descricaoTarefa;
    private Date dataAtribuicao;
    private Date prazoConclusao;
    private String statusTarefa;
    private String fkProcessoInvestigativoIdProcesso;
    private String fkFuncionarioMatriculaDesignado;

    // Getters e setters
}