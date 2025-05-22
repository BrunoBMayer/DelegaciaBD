// OK
package com.api.ProjetoBD.models;

public class PessoaModel {
    private String idPessoa;
    private String nome;
    private String cpf;
    private String outrosDadosIdentificacao;

    public String getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(String idPessoa) {
        this.idPessoa = idPessoa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getOutrosDadosIdentificacao() {
        return outrosDadosIdentificacao;
    }

    public void setOutrosDadosIdentificacao(String outrosDadosIdentificacao) {
        this.outrosDadosIdentificacao = outrosDadosIdentificacao;
    }
}
