// OK
package com.api.ProjetoBD.models;

public class EnvolvimentoProcessoModel {
    private String idEnvolvimento;
    private String papelNoProcesso;
    private String fkProcessoInvestigativoIdProcesso;
    private String fkPessoaIdEnvolvido;

    public String getIdEnvolvimento() {
        return idEnvolvimento;
    }

    public void setIdEnvolvimento(String idEnvolvimento) {
        this.idEnvolvimento = idEnvolvimento;
    }

    public String getPapelNoProcesso() {
        return papelNoProcesso;
    }

    public void setPapelNoProcesso(String papelNoProcesso) {
        this.papelNoProcesso = papelNoProcesso;
    }

    public String getFkProcessoInvestigativoIdProcesso() {
        return fkProcessoInvestigativoIdProcesso;
    }

    public void setFkProcessoInvestigativoIdProcesso(String fkProcessoInvestigativoIdProcesso) {
        this.fkProcessoInvestigativoIdProcesso = fkProcessoInvestigativoIdProcesso;
    }

    public String getFkPessoaIdEnvolvido() {
        return fkPessoaIdEnvolvido;
    }

    public void setFkPessoaIdEnvolvido(String fkPessoaIdEnvolvido) {
        this.fkPessoaIdEnvolvido = fkPessoaIdEnvolvido;
    }
}


