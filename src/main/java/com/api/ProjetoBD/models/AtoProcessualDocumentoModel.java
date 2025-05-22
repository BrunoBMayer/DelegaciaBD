//OK
package com.api.ProjetoBD.models;

import java.sql.Date;

public class AtoProcessualDocumentoModel {
    private String idAtoDocumento;
    private String tipoAtoDocumento;
    private Date dataCriacaoAto;
    private String conteudoResumidoOuReferenciaArquivo;
    private String fkProcessoInvestigativoIdProcesso;
    private String fkFuncionarioMatriculaAutor;
    private String fkPessoaIdAlvoAto;

    public String getIdAtoDocumento() {
        return idAtoDocumento;
    }

    public void setIdAtoDocumento(String idAtoDocumento) {
        this.idAtoDocumento = idAtoDocumento;
    }

    public String getTipoAtoDocumento() {
        return tipoAtoDocumento;
    }

    public void setTipoAtoDocumento(String tipoAtoDocumento) {
        this.tipoAtoDocumento = tipoAtoDocumento;
    }

    public Date getDataCriacaoAto() {
        return dataCriacaoAto;
    }

    public void setDataCriacaoAto(Date dataCriacaoAto) {
        this.dataCriacaoAto = dataCriacaoAto;
    }

    public String getConteudoResumidoOuReferenciaArquivo() {
        return conteudoResumidoOuReferenciaArquivo;
    }

    public void setConteudoResumidoOuReferenciaArquivo(String conteudoResumidoOuReferenciaArquivo) {
        this.conteudoResumidoOuReferenciaArquivo = conteudoResumidoOuReferenciaArquivo;
    }

    public String getFkProcessoInvestigativoIdProcesso() {
        return fkProcessoInvestigativoIdProcesso;
    }

    public void setFkProcessoInvestigativoIdProcesso(String fkProcessoInvestigativoIdProcesso) {
        this.fkProcessoInvestigativoIdProcesso = fkProcessoInvestigativoIdProcesso;
    }

    public String getFkFuncionarioMatriculaAutor() {
        return fkFuncionarioMatriculaAutor;
    }

    public void setFkFuncionarioMatriculaAutor(String fkFuncionarioMatriculaAutor) {
        this.fkFuncionarioMatriculaAutor = fkFuncionarioMatriculaAutor;
    }

    public String getFkPessoaIdAlvoAto() {
        return fkPessoaIdAlvoAto;
    }

    public void setFkPessoaIdAlvoAto(String fkPessoaIdAlvoAto) {
        this.fkPessoaIdAlvoAto = fkPessoaIdAlvoAto;
    }
}
