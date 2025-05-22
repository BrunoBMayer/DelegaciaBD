//OK
package com.api.ProjetoBD.models;

import java.sql.Date;

public class ProcessoInvestigativoModel {
    private String idProcesso;
    private String numeroProtocoloInterno;
    private String tipoProcesso;
    private Date dataAbertura;
    private Date dataConclusao;
    private String statusProcesso;
    private String descricaoResumidaObjeto;
    private String fkFuncionarioMatriculaResponsavelPrincipal;
    private String fkDenunciaIdOrigem;

    public String getIdProcesso() {
        return idProcesso;
    }

    public void setIdProcesso(String idProcesso) {
        this.idProcesso = idProcesso;
    }

    public String getNumeroProtocoloInterno() {
        return numeroProtocoloInterno;
    }

    public void setNumeroProtocoloInterno(String numeroProtocoloInterno) {
        this.numeroProtocoloInterno = numeroProtocoloInterno;
    }

    public String getTipoProcesso() {
        return tipoProcesso;
    }

    public void setTipoProcesso(String tipoProcesso) {
        this.tipoProcesso = tipoProcesso;
    }

    public Date getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(Date dataAbertura) {
        this.dataAbertura = dataAbertura;
    }

    public Date getDataConclusao() {
        return dataConclusao;
    }

    public void setDataConclusao(Date dataConclusao) {
        this.dataConclusao = dataConclusao;
    }

    public String getStatusProcesso() {
        return statusProcesso;
    }

    public void setStatusProcesso(String statusProcesso) {
        this.statusProcesso = statusProcesso;
    }

    public String getDescricaoResumidaObjeto() {
        return descricaoResumidaObjeto;
    }

    public void setDescricaoResumidaObjeto(String descricaoResumidaObjeto) {
        this.descricaoResumidaObjeto = descricaoResumidaObjeto;
    }

    public String getFkFuncionarioMatriculaResponsavelPrincipal() {
        return fkFuncionarioMatriculaResponsavelPrincipal;
    }

    public void setFkFuncionarioMatriculaResponsavelPrincipal(String fkFuncionarioMatriculaResponsavelPrincipal) {
        this.fkFuncionarioMatriculaResponsavelPrincipal = fkFuncionarioMatriculaResponsavelPrincipal;
    }

    public String getFkDenunciaIdOrigem() {
        return fkDenunciaIdOrigem;
    }

    public void setFkDenunciaIdOrigem(String fkDenunciaIdOrigem) {
        this.fkDenunciaIdOrigem = fkDenunciaIdOrigem;
    }
}
