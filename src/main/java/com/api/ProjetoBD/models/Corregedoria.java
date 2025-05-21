package com.api.ProjetoBD.models;

import lombok.Data;

@Data
public class Corregedoria {
    private String cnpj;
    private String numero;
    private String rua;
    private String bairro;
    private String cidade;
}
