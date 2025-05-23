//OK
package com.api.ProjetoBD.models;

import java.sql.Date;

public class DenunciaModel {
    private String idDenuncia;
    private Date dataOcorrencia;
    private Date dataRegistroSistema;
    private String descricaoFato;
    private String statusDenuncia;
    private boolean denuncianteAnonimo;
    private String fkFuncionarioMatriculaRegistrou;
    private String fkPessoaIdPessoa;
    private String fkFuncionarioMatriculaAvaliador;

    public String getIdDenuncia() {
        return idDenuncia;
    }

    public void setIdDenuncia(String idDenuncia) {
        this.idDenuncia = idDenuncia;
    }

    public Date getDataOcorrencia() {
        return dataOcorrencia;
    }

    public void setDataOcorrencia(Date dataOcorrencia) {
        this.dataOcorrencia = dataOcorrencia;
    }

    public Date getDataRegistroSistema() {
        return dataRegistroSistema;
    }

    public void setDataRegistroSistema(Date dataRegistroSistema) {
        this.dataRegistroSistema = dataRegistroSistema;
    }

    public String getDescricaoFato() {
        return descricaoFato;
    }

    public void setDescricaoFato(String descricaoFato) {
        this.descricaoFato = descricaoFato;
    }

    public String getStatusDenuncia() {
        return statusDenuncia;
    }

    public void setStatusDenuncia(String statusDenuncia) {
        this.statusDenuncia = statusDenuncia;
    }

    public boolean isDenuncianteAnonimo() {
        return denuncianteAnonimo;
    }

    public void setDenuncianteAnonimo(boolean denuncianteAnonimo) {
        this.denuncianteAnonimo = denuncianteAnonimo;
    }

    public String getFkFuncionarioMatriculaRegistrou() {
        return fkFuncionarioMatriculaRegistrou;
    }

    public void setFkFuncionarioMatriculaRegistrou(String fkFuncionarioMatriculaRegistrou) {
        this.fkFuncionarioMatriculaRegistrou = fkFuncionarioMatriculaRegistrou;
    }

    public String getFkPessoaIdPessoa() {
        return fkPessoaIdPessoa;
    }

    public void setFkPessoaIdPessoa(String fkPessoaIdPessoa) {
        this.fkPessoaIdPessoa = fkPessoaIdPessoa;
    }

    public String getFkFuncionarioMatriculaAvaliador() {
        return fkFuncionarioMatriculaAvaliador;
    }

    public void setFkFuncionarioMatriculaAvaliador(String fkFuncionarioMatriculaAvaliador) {
        this.fkFuncionarioMatriculaAvaliador = fkFuncionarioMatriculaAvaliador;
    }
}
