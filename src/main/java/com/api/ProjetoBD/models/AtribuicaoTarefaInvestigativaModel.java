//OK
package com.api.ProjetoBD.models;

import java.sql.Date;

public class AtribuicaoTarefaInvestigativaModel {
    private String idAtribuicao;
    private String descricaoTarefa;
    private Date dataAtribuicao;
    private Date prazoConclusao;
    private String statusTarefa;
    private String fkProcessoInvestigativoIdProcesso;
    private String fkFuncionarioMatriculaDesignado;

    public String getIdAtribuicao() {
        return idAtribuicao;
    }

    public void setIdAtribuicao(String idAtribuicao) {
        this.idAtribuicao = idAtribuicao;
    }

    public String getDescricaoTarefa() {
        return descricaoTarefa;
    }

    public void setDescricaoTarefa(String descricaoTarefa) {
        this.descricaoTarefa = descricaoTarefa;
    }

    public Date getDataAtribuicao() {
        return dataAtribuicao;
    }

    public void setDataAtribuicao(Date dataAtribuicao) {
        this.dataAtribuicao = dataAtribuicao;
    }

    public Date getPrazoConclusao() {
        return prazoConclusao;
    }

    public void setPrazoConclusao(Date prazoConclusao) {
        this.prazoConclusao = prazoConclusao;
    }

    public String getStatusTarefa() {
        return statusTarefa;
    }

    public void setStatusTarefa(String statusTarefa) {
        this.statusTarefa = statusTarefa;
    }

    public String getFkProcessoInvestigativoIdProcesso() {
        return fkProcessoInvestigativoIdProcesso;
    }

    public void setFkProcessoInvestigativoIdProcesso(String fkProcessoInvestigativoIdProcesso) {
        this.fkProcessoInvestigativoIdProcesso = fkProcessoInvestigativoIdProcesso;
    }

    public String getFkFuncionarioMatriculaDesignado() {
        return fkFuncionarioMatriculaDesignado;
    }

    public void setFkFuncionarioMatriculaDesignado(String fkFuncionarioMatriculaDesignado) {
        this.fkFuncionarioMatriculaDesignado = fkFuncionarioMatriculaDesignado;
    }
}
