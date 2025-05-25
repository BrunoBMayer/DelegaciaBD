//OK
package com.api.ProjetoBD.models;

public class FuncionarioModel {
    private String matricula;
    private String nome;
    private String fk_CorregedoriaCnpj;
    private String tipo_Funcionario;

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFkCorregedoriaCnpj() {
        return fkCorregedoriaCnpj;
    }

    public void setFkCorregedoriaCnpj(String fkCorregedoriaCnpj) {
        this.fkCorregedoriaCnpj = fkCorregedoriaCnpj;
    }

    public String getTipoFuncionario() {
        return tipoFuncionario;
    }

    public void setTipoFuncionario(String tipoFuncionario) {
        this.tipoFuncionario = tipoFuncionario;
    }
}
