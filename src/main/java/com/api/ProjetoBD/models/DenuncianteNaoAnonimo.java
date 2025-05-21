package com.api.ProjetoBD.models;

import lombok.Data;

@Data
public class DenuncianteNaoAnonimo {
    private String cpf;
    private boolean denuncianteAnonimo;  // FK to Denunciante
}
